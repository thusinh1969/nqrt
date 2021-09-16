import React, { Component } from "react"
import './predict_show.css'
import 'semantic-ui-css/semantic.min.css'
import { Tab } from "semantic-ui-react"

import PredictDescribe from './describe/describe'
import PredictHeatmap  from './heatmap/heatmap'
import PredictUnmatch  from './unmatch/unmatch'

class PredictShow extends Component {

    constructor (props) {
        super();
    }

    
render () {
        const panes = [
            { menuItem: 'Diễn giải', render: () => <Tab.Pane><div><PredictDescribe res={this.props.res}/></div></Tab.Pane> },
            { menuItem: 'Đặc thù', render: () => <Tab.Pane><div><PredictHeatmap  res={this.props.res}/></div></Tab.Pane> },
            { menuItem: 'Không tương đồng', render: () => <Tab.Pane><PredictUnmatch  res={this.props.res}/></Tab.Pane> },
        ]
        console.log('==> Checking response', this.props.res)
        if (this.props.res === null){
            console.log('No Tab')
            return null
        } else {
            console.log('==> Calling Prediction Tab')
            console.log(panes)
            return <Tab panes={panes} />
        }
    }
}

export default PredictShow