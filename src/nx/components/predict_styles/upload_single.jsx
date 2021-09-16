import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import axios from "axios";

import PredictShow from './predict_show.jsx'

import 'semantic-ui-css/semantic.min.css'
import './upload.css'
import { Button, Tab} from "semantic-ui-react"

import PredictDescribe from './describe/describe'

function UploadSingleImage () {
  
  const [files, setFiles] = useState(null)
  const [prediction_status, setPredictionStatus] = useState(0)
  const [clickStatus, setClickStatus] = useState("ui active button")
  const [actionTextButton, setActionTextButton] = useState("Bắt đầu")
  const [response, setResponse] = useState(null)

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
  getInputProps
  } = useDropzone({
      maxFiles:5,
      minSize: 5*1024,
      maxSize: maxSize_img,
      accept: accept_type,
      validator: imageSizeValidator,
      validator: imageTypeValidator,
      onDrop: acceptedFiles => {
        console.log('Number of files', acceptedFiles.length)
        if (acceptedFiles != files) {
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
    if (files != null) {
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
      const res = await axios.post('http://192.168.1.18:8080/styling', formdata, {
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
    if (files != null) {   
      console.log('Creating createSubmitButton', files.length, clickStatus)
      return (
          <Button class={clickStatus} onClick={callPredictions}>{actionTextButton}</Button>
      )
      }
    return null
  }
  
  const thumbs = (files) => {
    console.log('Call thumb display', files)
    if (files != null) {
      return (
        <div class="column center">
          <img class="ui large centered image" src={files[0].preview}></img>
      </div>
      )
    }
    return null
  };

  return (
      <section>
        {console.log('Re-redner display')}
        <div  className="dropzone" {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Kéo thả ảnh hoặc bấm vào đây để chọn tệp. 
            <br/><i>(Chỉ tệp ảnh và có kích thước nhỏ hơn 4MBytes)</i></p>
        </div>
        <div class="ui one column centered grid">
              {thumbs(files)}
        </div>
        <div class="ui one column centered grid">
          {createSubmitButton(files, clickStatus)}
        </div>
        {<PredictShow res={response} />}
      </section>  
  )

}

export default UploadSingleImage;