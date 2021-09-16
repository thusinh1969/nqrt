import React, { Component } from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default class PredictHeatmap extends Component {
    constructor(props) {
        super();
    }

    
    render() {
        return (
              <Slide easing="ease">
                {this.props.res.heatmap.map((data, index) => {
                    {console.log(data)}
                    return (<div className="each-slide">
                        <div key={index} style={{'backgroundImage': `url(${data.heatmap})`}}>
                            <span>{`${data.style}`} {`${data.score}`}</span>
                        </div>
                    </div>)
                    })
                }
              </Slide>
          )
    }
}
