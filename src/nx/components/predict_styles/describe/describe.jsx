import React, { Component } from "react"

import PredictClass from './predicted_class.jsx'
import PredictStyle from './predicted_style.jsx'
import PredictColor from './predicted_color.jsx'

class PredictDescribe extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <PredictClass />
            <hr/>
            <PredictStyle />
            <hr/>
            <PredictColor />
        </div>
    }
}

export default PredictDescribe
