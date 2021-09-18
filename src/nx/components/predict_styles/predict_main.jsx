import React, { Component } from "react"

import UploadSingleImage from './upload_single.jsx'

class PredictMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <h2 style={{"align": "center", "padding":"10px"}}>Tìm hiểu Phong cách Nội thất</h2>
            <UploadSingleImage />
        </div>
    }
}

export default PredictMain
