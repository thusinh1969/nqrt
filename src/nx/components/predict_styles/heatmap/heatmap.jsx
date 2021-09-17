import React, { Component } from "react"
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'

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
        return (
            <div>
              <Slider {...settings}>
                {this.props.res.heatmap.map((data, index) => {
                    {console.log(data)}
                    return (<div className='mydiv'>
                        <img className='myimg' key={index} src={`${data.heatmap}`}/>
                        <span>{`${data.style}`} {`${data.score}`}</span>
                    </div>)
                    })
                }
              </Slider>
            </div>
          )
    }
}
//https://react-slick.neostack.com/docs/get-started