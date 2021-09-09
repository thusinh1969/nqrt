import React, { Component } from "react"

import UploadSingleImage from './upload_single.jsx'

class PredictMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <UploadSingleImage />
        </div>
    }
}

export default PredictMain
