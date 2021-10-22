import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from "axios";

import Carousel from 'react-grid-carousel'
import { Row, Col } from 'antd'
import { Button } from "semantic-ui-react"

import MatchShow from './match_show.jsx'

function UploadDoubleImage () {
  
  const [files, setFiles] = useState(null)
  const [prediction_status, setPredictionStatus] = useState(0)
  const [clickStatus, setClickStatus] = useState("ui active button")
  const [actionTextButton, setActionTextButton] = useState("Bắt đầu")
  const [response, setResponse] = useState(null)

  const img = {
    display: 'flex',
    width: '100%',
    height: 'auto%',
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
  } = useDropzone({
      maxFiles:2,
      minSize: 5*1024,
      maxSize: maxSize_img,
      accept: accept_type,
      validator: imageSizeValidator,
      validator: imageTypeValidator,
      onDrop: acceptedFiles => {
        console.log('Number of files', acceptedFiles.length)
        if ((acceptedFiles.length===2) && (acceptedFiles !== files)) {
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
    formdata.append("source_img",  files[0]);
    formdata.append("dest_img",  files[1]);

    try {
      const res = await axios.post('/nqrt/match', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
        },
      })
      console.log('PREDICTION thành công !!!', res['data'])
      setClickStatus("ui active button")
      setActionTextButton("Bắt đầu")
      setResponse(res['data'])

      }
      catch(err) {
          console.log(err)
          setClickStatus("ui active button")
          setActionTextButton("Bắt đầu")
        }
  }

  const createSubmitButton = (files, clickStatus) => {
    if (files !== null) {
        if (files.length === 2) { 
            console.log('Creating createSubmitButton', files.length, clickStatus)
            return (
                <Button class={clickStatus} onClick={callPredictions}>{actionTextButton}</Button>
            )
        }
      }
    return null
  }
  
  const thumbs = (files) => {
    if (files !== null) {
        if (files.length > 0 ) {
            console.log('Call thumb display', files)
            return (
                <div class="ui one column">
                  <Carousel cols={2} rows={1} gap={10} loop>
                    {files.map((item) => {
                        return (
                          <Carousel.Item>
                            <img  style={img} width="100%" class="ui large image" src={item.preview}/>
                          </Carousel.Item>)
                    })}
                  </Carousel>
                </div>
            )
        }
    }
    return null
  };

  //https://react-grid-carousel.vercel.app/

  return (
      <section>
        {console.log('Re-redner display')}
        <div className="dropzone" {...getRootProps({ className: 'dropzone' })}>
          <input onClick={open} {...getInputProps()}/>
          <div><p style={{"text-align":"center"}}>Kéo thả 2 ảnh hoặc bấm vào đây để chọn tệp. 
            <br/><i>(Chỉ 2 tệp ảnh nhỏ hơn 4MBytes)</i></p></div>
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
            {<MatchShow res={response}/>} 
        </section>
    </section>  
    
  )

}

export default UploadDoubleImage;