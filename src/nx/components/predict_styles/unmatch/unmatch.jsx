import React, { Component } from "react"
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'

import Slider from "react-slick";

import './unmatch.scss'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
export default class PredictUnmatch extends Component {
    constructor(props) {
        super();
    }
      
    render() {
        if (this.props.res.unmatch) {
            return (
                <div>
                <Slider {...settings}>
                    {console.log('UNMATCH info', this.props.res.unmatch)}
                    <div className='mydiv'>
                        <img className='myimg' key={0} src={`${this.props.res.unmatch.heatmap}`}/>
                            <span>Lowest match score: <b>{`${(this.props.res.unmatch.unmatch_score*100.0).toFixed(2)}`}%</b>  {' '}
                            ({`${this.props.res.unmatch.evidences[0].style}`} {' '}
                             {`${(this.props.res.unmatch.evidences[0].score*100.00).toFixed(2)}`}%)</span>
                    </div>
                </Slider>
                </div>
            )
        } else {return <div className='mydiv'>Chúc mừng bạn có 1 ngữ cảnh và phong cách tương đồng toàn diện !</div>}
    }
}
//https://react-slick.neostack.com/docs/get-started