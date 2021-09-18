import React, { Component } from "react"

import UploadSingleImage from './upload_single'

class RecSysMain extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <h2 style={{"align": "center", "padding":"10px"}}>Tìm sản phẩm Nhà Xinh qua ảnh </h2>
            <UploadSingleImage />
        </div>
    }
}

export default RecSysMain
