import React, { Component } from "react"
import PopupText from '../../popup.jsx';
import { AiOutlineExclamationCircle } from "react-icons/ai";

import Slider from "react-slick";

import './heatmap.scss'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

export default class PredictHeatmap extends Component {
    constructor(props) {
        super();
    }
    
      
    render() {
        
        const data = this.props.res.heatmap.map((data) => {
          return {image: data.heatmap,
                    caption: data.style + ' ' + (data.score*100).toFixed(1)
                }
        })
      
        return (
          <Slider {...settings}>
                {this.props.res.heatmap.map((data, index) => {
                    {console.log(data)}
                    return (<div className='mydiv'>
                        <img className='myimg' key={index} src={`${data.heatmap}`}/>
                        <br/><span><b>{`${data.style}`}</b> {`${(data.score*100).toFixed(1)}%`}</span>
                    </div>)
                    })
                }
          </Slider>
          )
    }
}
