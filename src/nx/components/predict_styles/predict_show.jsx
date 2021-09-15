import React, { Component } from "react"
//import 'bootstrap/dist/css/bootstrap.css'
import './predict_show.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Segment, Label, Grid } from "semantic-ui-react"

import PredictDescribe from './describe/describe'

class PredictShow extends Component {

    constructor(props) {
        console.log(' LOG' + props)
        super();
        this.state = {
            prediction_status: 0,
            acceptedFiles: props.toCall,
            toggleState: [1,0,0]
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.createSubmitButton = this.createSubmitButton.bind(this);
        this.callPredictions    = this.callPredictions.bind(this);
    }

    componentDidUpdate(prevProps) {
        console.log('Calling state when prop change lead to component udated')
        if (prevProps.prediction_status !== this.props.prediction_status) {
            this.setState({prediction_status:this.props.prediction_status})
        }
        console.log(this.state.prediction_status)
      }

toggleTab = (index) => {
    let toggleState_copy = this.state.toggleState.map( (value, idx) => {
            return (idx===index) ? 1 : 0
        }
    )
    this.setState({toggleState:toggleState_copy})
}

callPredictions = () => {
    // Disable button while predicting. If predict with error --> enable again
    console.log('Call prediction - disable button')
    const btn = document.getElementById("predictionButton")
    btn.disabled = true;
    btn.innerText  = "Đang tính toán...";

    // Call prediction here
    // If successful, call
    //this.setState({prediction_success:1})
    setTimeout(() => {  this.setState({prediction_status:2}) }, 2000);
}

createSubmitButton = ( acceptedFiles => {
    console.log('--> Display and wait for pressing')
    if (acceptedFiles.length > 0) {   
        return (
            <Segment>
            <Grid>
              <Grid.Column textAlign="center">
                <Button id="predictionButton" size="small" className="blue center" onClick={this.callPredictions}>Bắt đầu phân tích</Button>
              </Grid.Column>
            </Grid>
          </Segment>
        
        )
    }
    else {
      return null;
    }
  })

render() {

    console.log(this.props.toCall.length, this.props.prediction_status, this.state.prediction_status, )
    if ((this.props.toCall.length === 0) && (this.state.prediction_status===0)) {
        console.log('Nothing to display')
        return null
    }
    else if (this.props.prediction_status===1) {
        console.log('Display button')
        return this.createSubmitButton(this.props.toCall)
    }
    else 
        console.log('Display tabs')
        return (
            <div className="container">
            <div className="bloc-tabs">
                <button
                    className={this.state.toggleState[0] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={ () => this.toggleTab(0)}
                    >
                    Diễn giải
                </button>
                <button
                    className={this.state.toggleState[1] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => this.toggleTab(1)}
                    >
                    Đặc thù
                </button>
                <button
                    className={this.state.toggleState[2] === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => this.toggleTab(2)}
                    >
                    Không tương đồng
                </button>
            </div>

            <div className="content-tabs">
                <div
                className={this.state.toggleState[0] === 1 ? "content  active-content" : "content"}
                >
                <hr />
                    <PredictDescribe />
                </div>

                <div
                className={this.state.toggleState[1] === 1 ? "content  active-content" : "content"}
                >
                <h2>Content 2</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    voluptatum qui adipisci.
                </p>
                </div>

                <div
                className={this.state.toggleState[2] === 1 ? "content  active-content" : "content"}
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
}

export default PredictShow
