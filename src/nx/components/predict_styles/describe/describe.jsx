import React, { Component } from "react"

import PredictClass from './predicted_class.jsx'
import PredictStyle from './predicted_style.jsx'
import PredictColor from './predicted_color.jsx'

class PredictDescribe extends Component {
    constructor(props) {
        super()
    }

    render() {
        return <div>
                <div>
                    <hr/>
                    <PredictClass res={this.props.res}/>
                </div>
                <div>
                    <hr/>
                    <PredictStyle res={this.props.res}/></div>
                <div>
                    <hr/>
                    <PredictColor res={this.props.res}/>
                </div>
        </div>
    }
}

export default PredictDescribe
