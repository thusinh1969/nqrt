import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import './predict_show.css'

import PredictDescribe from './describe/describe'

class PredictShow extends Component {

    constructor(props) {
        console.log(' LOG' + props)
        super();
        this.state = {
            prediction_success: 0,
            disableClick: 'enabled',
            acceptedFiles: props.toCall,
            toggleState: [1,0,0]
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.createSubmitButton = this.createSubmitButton.bind(this);
        this.callPredictions    = this.callPredictions.bind(this);
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
    // If successful, call this.state.setState with predicted=1
}

createSubmitButton = ( acceptedFiles => {
    if (acceptedFiles.length > 0) {   
      return <button id="predictionButton" onClick={this.callPredictions} type="button" class="btn btn-warning">Bắt đầu phân tích</button>
    }
    else {
      return null;
    }
  })

render() {

    console.log(this.props.toCall)
    if (this.props.toCall.length === 0) {
        return null
    }
    else if (this.state.prediction_success===0) {
        return this.createSubmitButton(this.props.toCall)
    }
    else 
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
