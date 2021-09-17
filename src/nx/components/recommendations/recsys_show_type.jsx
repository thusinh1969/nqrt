import React, { Component, setState } from "react"
import MultipleGridImages from 'react-multiple-image-grid'
import Carousel from 'react-grid-carousel'
import './recsys_show.css'

export default class RecSysShow_Type extends Component {
    constructor(props) {
        super();
    }
    render() {
        if (this.props.res !== null) {
            console.log('Images returned: ', this.props.res)
            return (
                <Carousel cols={3} rows={2} gap={10} loop>
                    {this.props.res['matches'].map((item) => {
                        return <Carousel.Item>
                            <img width="100%" height='auto' src={item['url']} />
                            <br/> ** SCORE: {item['score']} ** 
                            <br/>{item['SAP_desc']}
                        </Carousel.Item>
                        })
                    }
                </Carousel>
            )
        }
        return null
    }
}
//https://www.npmjs.com/package/react-multiple-image-grid
//https://react-grid-carousel.vercel.app/
