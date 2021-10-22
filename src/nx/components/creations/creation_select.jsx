import React, { setState, Component } from "react"
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from "semantic-ui-react"

import ClapHand from '../claps.jsx';

class CreationSelect extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStyle = this.handleStyle.bind(this)
        this.handleLucky = this.handleLucky.bind(this)

        this.state = {
            style : 0,
            lucky: -1,
            img: null,
            clickStatus: "ui active button",
            actionTextButton: "Bắt đầu",
        }
     }

    handleLucky = (e) => {
        if (e.target.value==="") {
            this.setState({lucky:-1})
        }
        else {
            this.setState({lucky:e.target.value})
        }
        console.log('Select lucky', this.state.style)
    }

    handleStyle = (e) => {
        this.setState({style : e.target.value})
        console.log('Select style', e.target.value, this.state.style)
    }

    async handleSubmit () {
        console.log('*** Calling GAN')
        
        this.setState({clickStatus: "ui disabled button"})
        this.setState({actionTextButton: "Tính toán..."})

        let formdata = new FormData();
        formdata.append("style", this.state.style);
        formdata.append("lucky", this.state.lucky);
        formdata.append("trunc", 0.5);
        formdata.append("scale", 0);
        console.log('PREDICTING... !!!');
    
        try {
            const res = await axios.post('/nqrt/creative', formdata, {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                },
            })
            console.log('PREDICTION thành công !!!', res)
            this.setState({clickStatus: "ui active button"})
            this.setState({actionTextButton: "Bắt đầu"})    
            this.setState({img: res['data']['creative']['img']})
        }
        catch(err) {
              console.log('ERROR prediction', err)
        }
    }
    
    render() {
        return (
            <div style={{"display": "flex", "min-height":"15vh", "flex-direction": "column", "padding": "30px"}}>
                <h2>Chọn các tham số để AI sáng tạo. <br/> <h6>Tất cả Nội Thất bạn sẽ thấy dưới đây CHƯA TỪNG CÓ TRÊN CÕI ĐỜI NÀY.</h6></h2>
                <br/><h6><i>(Tính năng đang xây chỉ cho Phòng Khách, còn xấu nhé)</i></h6>
                <p>
                    <label>
                        Chọn phong cách {'  '}
                        <select style={{"height": "30px", "width": "auto"}} value={this.state.style} onChange={this.handleStyle}>
                            <option value={0}>Asian</option>
                            <option value={1}>Coastal</option>
                            <option value={2}>Contemporary</option>
                            <option value={3}>Craftsman</option>
                            <option value={4}>Eclectic</option>
                            <option value={5}>Farmhouse</option>
                            <option value={6}>French Country</option>
                            <option value={7}>Industrial</option>
                            <option value={9}>Mediterranean</option>
                            <option value={10}>Mid-century</option>
                            <option value={11}>Modern</option>
                            <option value={12}>Rustic</option>
                            <option value={13}>Scandinavian</option>
                            <option value={14}>Shabby</option>
                            <option value={15}>Southwestern</option>
                            <option value={16}>Traditional</option>
                            <option value={17}>Transitional</option>
                            <option value={18}>Tropical</option>
                            <option value={19}>Victorian</option>
                        </select>
                        </label>
                </p>
                <p>Chọn con số may mắn (1 - 1e8) {'  '}
                    <input type="text" onChange={this.handleLucky} onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                    } else {
                                                        this.setState({lucky:event.value})
                                                        console.log(this.state.lucky)
                                                    }
                    }}/>
                </p>
                <Button class={this.state.clickStatus} onClick={this.handleSubmit}>{this.state.actionTextButton}</Button>
                <hr/>
                <div style={{'display':'flex'}}>
                    {this.state.img!==null ? <div style={{"display":"flex", "flex-direction":"column", "align-items":"center"}}><div><ClapHand page_claps="creative"/></div><br/><img class="ui medium centered image" src={this.state.img} alt="GAN created"></img></div> : <></>}
               </div>
            </div>
        )
    }
}

export default CreationSelect
