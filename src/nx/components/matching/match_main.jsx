import React, { Component } from "react"

import UploadDoubleImage from './upload_double'

class MatchMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <h2 style={{"align": "center", "padding":"10px"}}>So sánh nội thất và phong cách</h2>
            <UploadDoubleImage />
        </div>
    }
}

export default MatchMain
