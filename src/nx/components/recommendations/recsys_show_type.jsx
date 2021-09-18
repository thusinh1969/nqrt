import React, { Component, setState } from "react"
import MultipleGridImages from 'react-multiple-image-grid'
import Carousel from 'react-grid-carousel'
import './recsys_show.css'

import { Row, Col } from 'antd'

export default class RecSysShow_Type extends Component {
    constructor(props) {
        super();
    }
    render() {
        if (this.props.res !== null) {
            console.log('Images returned: ', this.props.res)
            return (
                <Carousel cols={3} rows={1} gap={10} loop>
                    {this.props.res['matches'].map((item) => {
                        return <Carousel.Item>
                            <Row>
                                <Col><img width="100%" height='auto' src={item['url']}/></Col>
                            </Row>
                            <Row>
                                <Col>** SCORE: {item['score']} ** {item['SAP_desc']}</Col>
                            </Row>
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
