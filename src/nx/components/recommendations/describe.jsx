import React, { Component } from "react"

import RecSysShow from './recsys_show.jsx'

class PredictDescribe extends Component {
    constructor(props) {
        super()
    }

    render() {
        return <container>
                    <RecSysShow res={this.props.res}/>
        </container>
    }
}

export default PredictDescribe
