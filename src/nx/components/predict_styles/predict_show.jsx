import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import './predict_show.css'

import PredictDescribe from './describe/describe'

class PredictShow extends Component {

    constructor() {
        super();
        this.state = {
            toggleState: [1,0,0]
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

toggleTab = (index) => {
    let toggleState_copy = this.state.toggleState.map( (value, idx) => {
            console.log(index, 'ID:' + idx)
            return (idx===index) ? 1 : 0
        }
    )
    console.log(toggleState_copy)
    this.setState({toggleState:toggleState_copy})
}

render() {

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
