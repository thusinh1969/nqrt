import React, { Component } from "react"
import ProgressBar from 'react-percent-bar';

import PopupText from '../../popup.jsx';

import { AiOutlineExclamationCircle } from "react-icons/ai";

import './predicted_class.scss';

class PredictStyle extends Component {
    constructor(props) {
        super()
    }

    render() {
        console.log('---> Class display prediction', this.props.res.style)
        return (
            <div className="classDiv"><h2>Phong cách</h2><p><i><h6>(Xem thêm Đặc thù)</h6></i></p>
                {this.props.res.style.map((data, index) => <p key={index}>{data.Class} { }
                <PopupText trigger={<button><AiOutlineExclamationCircle /></button>} position="right center" text={data.desc}>
                </PopupText>
                <ProgressBar colorShift={false} borderColor="green" fillColor="green" percent={data.score*100}/></p>)}
            </div>
        )
    }
}

export default PredictStyle