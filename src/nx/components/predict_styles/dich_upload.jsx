import React, { useState, useEffect } from 'react';
import {Upload} from 'antd';
import axios from "axios";
import PredictShow from './predict_show.jsx'

import 'semantic-ui-css/semantic.min.css'
import './upload.css'
import { Button, Segment, Label, Grid } from "semantic-ui-react"

import PredictDescribe from './describe/describe'

function UploadSingleImage () {

  const { Dragger } = Upload;
  
  const [files, setFiles] = useState(null)
  const [prediction_status, setPredictionStatus] = useState(0)
  const [toggleState, setToggleState] = useState([1,0,0])
  const [clickStatus, setClickStatus] = useState("blue center button")
  const [queryImage, setQueryImage]   = useState("")

  const toggleTab = (index) => {
    let toggleState_copy = toggleState.map( (value, idx) => {
            return (idx===index) ? 1 : 0
        }
    )
    setToggleState(toggleState_copy)
  }

  const readyPredict = ( () => {
    if ((files === null) | (prediction_status!=2)) {
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
  
    setPredictionStatus(2);
    let formdata = new FormData();
    formdata.append("images",  files);

    axios.post('http://192.168.1.18:8080/styling', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        'Accept': '*/*',
      },
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    setPredictionStatus(2);
  }

  const createSubmitButton = ( () => {
    if (files !=null) {   
      console.log('--> Creating createSubmitButton', files.name)
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
        <Segment>
            <Dragger showUploadList={false}
                  openFileDialogOnClick={true}
                  beforeUpload={(file) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (url) => setFiles(reader.result));
                    reader.readAsDataURL(file);
                  }}
                  height={50}
            >
                {!files ? (
                        <div>Drag images here!</div>
                  ) : (
                  <div class="column centered grid"><img class="ui large centered image" src={files}></img></div>)
                }
            </Dragger>
      </Segment>
      <section>
        <div class="ui one column centered grid">
          {createSubmitButton(files, prediction_status)}
        </div>
      </section>
      <section>
          {readyPredict()}
      </section>
    </section>
  )

}

export default UploadSingleImage;