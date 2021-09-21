import React, { useState } from "react"
import { Row, Col } from 'antd'
import ProgressBar from 'react-percent-bar';

import ClapsButton from '../../../gatsby-claps'

import {
    StopOutlined,
    StopTwoTone,
  } from '@ant-design/icons';

import './match_show.css'

import ClapHand from '../claps.jsx';

export default function  MatchShow (props) {
    
    console.log('Call show MATCHINGs', props.res)
    if (props.res !== null) {
        return (
            <div>
                <>
                <Row>
                    <div className="classDiv"><ClapHand page_claps="matching"/></div>
                    <Col span={12}>
                        <div className="classDiv"><h2>Theo phong cách</h2>
                            <p>Score: <b>{(props.res['data'][1]['style_score']*100).toFixed(1)} %</b></p>
                            <p>
                            {props.res['data'][1]['style_score'] > 0 ? 
                                (<ProgressBar colorShift={false} borderColor="green" fillColor="green" percent={props.res['data'][1]['style_score']*100}/>) : 
                                (<StopTwoTone twoToneColor="#eb2f96" />)
                            } 
                            </p>
                        </div>
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col span={8}>
                        <div className="classDiv"><h2>Theo ngữ cảnh</h2>
                            <p>Score: <b>{(props.res['data'][0]['class_score']*100).toFixed(1)} %</b></p>
                            <p>
                            {props.res['data'][0]['class_score'] > 0 ? 
                                (<ProgressBar colorShift={false} borderColor="green" fillColor="green" percent={props.res['data'][0]['class_score']*100}/>) : 
                                (<StopTwoTone twoToneColor="#eb2f96" />)
                            }
                            </p>
                        </div>
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col span={8}>
                        <div className="classDiv"><h2>Theo cảm quan</h2>
                            <p>Score: <b>{(props.res['data'][2]['combined_score']*100).toFixed(1)} %</b></p>
                            <p>
                            {props.res['data'][2]['combined_score'] > 0 ? 
                                (<ProgressBar colorShift={false} borderColor="green" fillColor="green" percent={props.res['data'][2]['combined_score']*100}/>) : 
                                (<StopTwoTone twoToneColor="#eb2f96" />)
                            }
                            </p>
                        </div>
                    </Col>
                </Row> 
                </>
            </div>
        )

    } else {
        return null }
}