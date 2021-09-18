import React, { Component } from "react"
import ProgressBar from 'react-percent-bar';

import './predicted_class.scss';

class PredictStyle extends Component {
    constructor(props) {
        super()
    }

    render() {
        console.log('---> Class display prediction', this.props.res.style)
        return (
            <div className="classDiv"><h2>Phong cách</h2>
                {this.props.res.style.map((data, index) => <p key={index}>{data.Class} 
                <ProgressBar colorShift={false} borderColor="green" fillColor="green" percent={data.score*100}/></p>)}
            </div>
        )
    }
}

export default PredictStyle
