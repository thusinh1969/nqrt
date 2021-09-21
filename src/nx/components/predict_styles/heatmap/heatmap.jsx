import React, { Component } from "react"
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'

import Slider from "react-slick";

//import Lightbox from "react-awesome-lightbox";
//import "react-awesome-lightbox/build/style.css";

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
//https://react-slick.neostack.com/docs/get-started

/* ---
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
              --- */