import React, { Component } from "react"

import UploadSingleImage from './upload_single'

class RecSysMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <UploadSingleImage />
        </div>
    }
}

export default RecSysMain