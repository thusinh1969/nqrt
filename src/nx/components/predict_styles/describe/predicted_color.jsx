import React, { Component } from "react"
import ProgressBar from 'react-percent-bar';

import ProgressBarNew from "./progress-bar.component";

import './predicted_class.scss';

class PredictColor extends Component {
    constructor(props) {
        super()
    }

    render() {
        console.log('---> Class display prediction', this.props.res.color)
        return (
            <div className="classDiv"><h2>Màu chủ đạo</h2>
                {this.props.res.color.map((data, index) => { 
                    return (
                        <div key={index}>{data.Class} ({data.hex})
                        <ProgressBarNew borderColor="green" bgcolor={data.hex} completed={(data.score*100).toFixed(1)}/></div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default PredictColor
