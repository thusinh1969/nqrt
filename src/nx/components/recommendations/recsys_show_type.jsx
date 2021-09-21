import React, { Component, setState } from "react"
//import MultipleGridImages from 'react-multiple-image-grid'

import styled from "styled-components";
import Carousel from "react-grid-carousel";

import './recsys_show.css'

import ClapHand from '../claps.jsx';

const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "inline-block",
        height: isActive ? "8px" : "5px",
        width: isActive ? "8px" : "5px",
        background: "#1890ff"
      }}
    ></span>
  );
  
  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
  `;
  
  const Row = styled.div`
    max-width: 1100px;
    padding: 0 50px;
    margin: 50px auto;
    @media screen and (max-width: 670px) {
      padding: 0;
    }
  `;
  
  const ArrowBtn = styled.span`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: ${({ type }) => (type === "right" ? "-40px" : "unset")};
    left: ${({ type }) => (type === "left" ? "-40px" : "unset")};
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: ${({ type }) =>
        type === "right"
          ? "translate(-75%, -50%) rotate(45deg)"
          : "translate(-25%, -50%) rotate(-135deg)"};
      width: 10px;
      height: 10px;
      border-top: 2px solid #666;
      border-right: 2px solid #666;
    }
    &:hover::after {
      border-color: #333;
    }
  `;
  
  const Card = styled.div`
    margin: 2px;
    border-radius: 6px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.25s;
    :hover {
      box-shadow: 0 0 2px 0 #00000063;
    }
  `;
  
  const Img = styled.div`
    width: auto;
    height: 200px;
    margin-bottom: 4px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: visible
  `;
  
  const Title = styled.div`
    margin: 0 10px 10px;
    font-size: 15px;
    font-weight: bold;
  `;
  
  const Star = styled.div`
    float: left;
    margin: 10px;
    color: #26bec9;
    font-size: 15px;
  `;
  
  const Price = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #999;
    float: right;
    margin: 10px;
    span {
      font-size: 15px;
      color: #26bec9;
    }
  `;
  
  const Code = styled.pre`
    max-width: 1100px;
    margin: 15px auto;
    background: lightblue;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
  `;
  
  const Reference = styled.div`
    margin: 50px auto;
    width: 100%;
    max-width: 1100px;
    border-top: 1px solid #666;
    img {
      width: 100%;
    }
  `;

export default class RecSysShow_Type extends Component {
    constructor(props) {
        super();
    }
    render() {
        if (this.props.res !== null) {
            console.log('Images returned: ', this.props.res)
            return (
                <div>
                  <div className="classDiv"><ClapHand page_claps="recsys"/></div>
                <Row>
                    <Carousel
                        cols={4}
                        rows={1}
                        gap={11}
                        responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 3
                        },
                        {
                            breakpoint: 990,
                            cols: 3
                        }
                        ]}
                        mobileBreakpoint={670}
                        arrowRight={<ArrowBtn type="right" />}
                        arrowLeft={<ArrowBtn type="left" />}
                    >
                        {this.props.res['matches'].map((item, idx) => {
                            return (<Carousel.Item key={idx}>
                                <Card>
                                    <Img img={item['url']} />
                                    <Title>
                                        ({item['score']}) {item['SAP_desc']}
                                    </Title>
                                    <Star>★★★★★</Star>
                                    <Price>
                                        VND <span>12,500,000</span>
                                    </Price>
                                </Card>
                            </Carousel.Item>)
                        })}
                    </Carousel>
                </Row>
                </div>
            )
        }
        return null
    }
}
//https://www.npmjs.com/package/react-multiple-image-grid
//https://react-grid-carousel.vercel.app/
