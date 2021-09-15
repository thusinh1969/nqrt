import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {useDropzone} from 'react-dropzone';
import PredictShow from './predict_show.jsx'

import 'semantic-ui-css/semantic.min.css'
import './upload.css'
import { Button, Segment, Label, Grid } from "semantic-ui-react"

import PredictDescribe from './describe/describe'

function UploadSingleImage () {

  const [files, setFiles] = useState([])
  const [prediction_status, setPredictionStatus] = useState(0)
  const [toggleState, setToggleState] = useState([1,0,0])

  const [clickStatus, setClickStatus] = useState("blue center button")

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginLeft: 12,
  };

  const thumb = {
    display: 'flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 400,
    height: 400,
    padding: 4,
    boxSizing: 'border-box',
    align: 'center',
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 400,
    overflow: 'hidden',
    align: 'center',
  };

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
        setFiles(acceptedFiles.map(file => Object.assign(file,  {
            preview: URL.createObjectURL(file)
          })));
        setPredictionStatus(1)
        setClickStatus("ui blue center button")
      }
  })

  const thumbs = files.map(file => (
    <div class="column center">
        <img class="ui large centered image" src={file.preview}></img>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const toggleTab = (index) => {
    let toggleState_copy = toggleState.map( (value, idx) => {
            return (idx===index) ? 1 : 0
        }
    )
    setToggleState(toggleState_copy)
  }

  const readyPredict = ( () => {
    console.log(files.length, prediction_status)
    if ((files.length === 0) | (prediction_status===0)) {
        console.log('No Tab')
        return null
    }
    if (prediction_status==2) {
      console.log('Display tabs')
      return (
          <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState[0] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={ () => toggleTab(0)}
                    >
                    Diễn giải
                </button>
                <button
                    className={toggleState[1] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >
                    Đặc thù
                </button>
                <button
                    className={toggleState[2] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    Không tương đồng
                </button>
            </div>
  
            <div className="content-tabs">
                <div
                className={toggleState[0] === 1 ? "content  active-content" : "content"}
                >
                <hr />
                    <PredictDescribe />
                </div>
  
                <div
                className={toggleState[1] === 1 ? "content  active-content" : "content"}
                >
                <h2>Content 2</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    voluptatum qui adipisci.
                </p>
                </div>
  
                <div
                className={toggleState[2] === 1 ? "content  active-content" : "content"}
                >
                <h2>Content 3</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                    nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                    Accusamus in quia odit aspernatur provident et ad vel distinctio
                    recusandae totam quidem repudiandae omnis veritatis nostrum
                    laboriosam architecto optio rem, dignissimos voluptatum beatae
                    aperiam voluptatem atque. Beatae rerum dolores sunt.
                </p>
                </div>
            </div>
            </div>
        );
    }
  })
  const callPredictions = () => {
    // Disable button while predicting. If predict with error --> enable again
    console.log('Call prediction - disable button')
    //console.logbtn.innerText  = "Đang tính toán...";
    setClickStatus("ui disabled button")
  
    // Call prediction here
    // If successful, call
    console.log('Predicting...', prediction_status)
    setTimeout(() => { 
      setPredictionStatus(2);
      readyPredict ();
  
    }, 2000);
  }

  const createSubmitButton = ( () => {
    if (files.length > 0) {   
      console.log('--> Creating createSubmitButton', files.length)
      return (
            <Segment>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button id="predictionButton" size="small" class={clickStatus} onClick={callPredictions}>Bắt đầu phân tích</Button>
                </Grid.Column>
              </Grid>
            </Segment>
        
        )
    }
    else {
      return null;
    }
  })

  return (
      <section>
        <div  className="dropzone" {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Kéo thả ảnh hoặc bấm vào đây để chọn tệp. 
            <br/><i>(Chỉ tệp ảnh và có kích thước nhỏ hơn 4MBytes)</i></p>
        </div>
        <div class="ui one column centered grid">
              {thumbs}
        </div>
        <div class="ui one column centered grid">
          {createSubmitButton(files, prediction_status)}
        </div>
        <div class="ui one column centered grid">
          {readyPredict(files, prediction_status)}
        </div>
      </section>  
  )

}

export default UploadSingleImage;