import React, { setState, Component } from "react"
import './predict_show.css'
import 'semantic-ui-css/semantic.min.css'
import { Label, Menu, Tab } from "semantic-ui-react"

import PredictDescribe from './describe/describe'
import PredictHeatmap  from './heatmap/heatmap'
import PredictUnmatch  from './unmatch/unmatch'

class PredictShow extends Component {

    constructor (props) {
        super();

        this.state = {
            hasUnmatch : ''
        }

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('PROPS at the PREDICT SHOW ?', nextProps.res)
        if (nextProps.res) {
            if (nextProps.res.unmatch) {
                console.log('Does it contain UNMATCH ?', nextProps.res.unmatch)
                return {hasUnmatch: <Label style={{'color':'yellow', 'background':'red'}}>( X )</Label>}
            }
            else {
                return {hasUnmatch: ''}
            }

        }
       }

render () {
        const panes = [
            { menuItem: 'Diễn giải', render: () => <Tab.Pane><div><PredictDescribe res={this.props.res}/></div></Tab.Pane> },
            { menuItem: 'Đặc thù', render: () => <Tab.Pane><div><PredictHeatmap  res={this.props.res}/></div></Tab.Pane> },
            { menuItem: (<Menu.Item key='unmatch'>Không tương đồng{this.state.hasUnmatch}</Menu.Item>), 
                        render: () => <Tab.Pane><PredictUnmatch  res={this.props.res}/></Tab.Pane>},
        ]
        if (this.props.res === null){
            return null
        } else {
            return <Tab panes={panes} />
        }
    }
}

export default PredictShow
