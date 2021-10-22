import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from "axios";

import RecSysShow from './recsys_show.jsx'

//import 'semantic-ui-css/semantic.min.css'
import './upload.css'
import { Button } from "semantic-ui-react"

function UploadSingleImage () {
  
  const [files, setFiles] = useState(null)
  const [prediction_status, setPredictionStatus] = useState(0)
  const [clickStatus, setClickStatus] = useState("ui active button")
  const [actionTextButton, setActionTextButton] = useState("Bắt đầu")
  const [response, setResponse] = useState(null)
  const [dropBox, setDropBox] = useState(null)

  const img = {
    display: 'flex',
    width: 'auto',
    height: '100%',
    align: 'center',
  };    
  const maxSize_img = 5*1024*1024
  const accept_type  = 'image/jpeg,image/png,image/jpg,image/gif'

  function imageTypeValidator(file) {
    console.log(file.type)
    if (!accept_type.split(',').includes(file.type)) {
      return {
        code: "NQRT-invalid-image-type",
        message: `Chỉ các kiểu tệp ${accept_type} được dùng !`
      };
    }

    return null
  }

  function imageSizeValidator(file) {
    if (file.size > maxSize_img) {
      return {
        code: "NQRT-invalid-image-size",
        message: `Tệp giới hạn kích thước ${maxSize_img} !`
      };
    }

    return null
  }

  const {
  acceptedFiles,
  fileRejections,
  getRootProps,
  getInputProps,
  open,
  isDragActive
  } = useDropzone({
      maxFiles:1,
      minSize: 5*1024,
      maxSize: maxSize_img,
      accept: accept_type,
      validator: imageSizeValidator,
      validator: imageTypeValidator,
      onDrop: acceptedFiles => {
        console.log('Number of files', acceptedFiles.length)
        if ((acceptedFiles.length > 0) && (acceptedFiles !== files)) {
          setPredictionStatus(1);
          setActionTextButton("Bắt đầu")
          setResponse(null);
        }
        setFiles(acceptedFiles.map(file => Object.assign(file,  {
            preview: URL.createObjectURL(file)
          })));
      }
  })

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    console.log('Call useEffect')
    if (files !== null) {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }
  }, [files]);

  async function callPredictions () {
    console.log('Call prediction - disable button')
    setClickStatus("ui disabled button")
    setActionTextButton("Đang tính toán...")

    let formdata = new FormData();
    formdata.append("images",  files[0]);

    try {
      const res = await axios.post('/nqrt/recsys', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
        },
      })
      console.log('PREDICTION thành công !!!', res['data'])
      setClickStatus("ui active button")
      setActionTextButton("Bắt đầu")

      //console.log(res['data'])
      const recsys_images_Param = res['data']['data'].map((item) => {
            return item
        })

      const dropBoxParam = recsys_images_Param.map((item, index) => {
            return {'value': index, 'label': item['type']}
        })
      console.log('Set DROPBOX', dropBoxParam)
      setDropBox(dropBoxParam)
      setResponse(recsys_images_Param)

      }
      catch(err) {
          console.log(err)
          setClickStatus("ui active button")
          setActionTextButton("Bắt đầu")
        }
  }

  const createSubmitButton = (files, clickStatus) => {
    if (files !== null) {
        if (files.length > 0) { 
            console.log('Creating createSubmitButton', files.length, clickStatus)
            return (
                <Button class={clickStatus} onClick={callPredictions}>{actionTextButton}</Button>
            )
        }
      }
    return null
  }
  
  const thumbs = (files) => {
    console.log('Call thumb display', files)
    if (files !== null) {
        if (files.length > 0) {
            return (
                <div class="column center">
                <img class="ui large centered image" src={files[0].preview}></img>
            </div>
            )
        }
    }
    return null
  };

// style={{"cursor" : "pointer"}} 

  return (
      <section>
        {console.log('Re-redner display')}
        <div className="dropzone" {...getRootProps({ className: 'dropzone' })}>
          <input onClick={open} {...getInputProps()}/>
          <div><p style={{"text-align":"center"}}>Kéo thả chỉ 1 ảnh hoặc bấm để chọn. 
            <br/><i>(Chỉ 1 tệp ảnh nhỏ hơn 4MBytes)</i></p></div>
        </div>
        <div class="ui one column centered grid">
              {thumbs(files)}
        </div>
        <div class="ui one column centered grid">
          {createSubmitButton(files, clickStatus)}
        </div>
        <br/>
        <hr/>
        <section>
            {<RecSysShow res={response} dropBoxParam={dropBox}/>} 
        </section>
    </section>  
    
  )

}

export default UploadSingleImage;