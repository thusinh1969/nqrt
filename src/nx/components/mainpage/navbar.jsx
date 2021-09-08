import React, { Component } from "react"

import PredictMain from '../predict_styles/predict_main'
import RecSysMain  from '../recommendations/recsys_main'
import CreationSelect from '../creations/creation_select'
import About from './about'

class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <h3>NAVBAR</h3>
            <ul>
                <li><a href='/'> * Trang chủ </a></li>
                <li><a href='/style'> * Phong cách </a></li>
                <li><a href='/recsys'>  * Tìm hàng </a></li>
                <li><a href='/creation'>  * Sáng tạo </a></li>
                <li><a href='/about'> * NQRT ? </a></li>
            </ul>

       </div>
    }
}

export default NavBar
