import React, { Component } from "react"

import PredictShow from './predict_show.jsx'

class PredictMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <h3> *** Xác định Phong Cách Nội Thất bằng cách tải 1 ảnh !  *** </h3>
            <PredictShow />
        </div>
    }
}

export default PredictMain
