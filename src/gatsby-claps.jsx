// https://www.achrafash.me/blog/medium-claps-gatsby-tutorial/

import myCollection from "./my_firebase";

import React, { useState, useEffect } from 'react'
import styled from "styled-components"

import { doc, setDoc, getDoc } from "firebase/firestore"; 

export default function ClapsButton(props) {
    const [clapsCounter, setClapsCounter] = useState(0);
    const [newClaps, setNewClaps] = useState(0);
    
    const myDoc = doc(myCollection, props.page_claps)

    async function getDocData(myDoc) {
      const data = await getDoc(myDoc)
      console.log('TEST Firebase', data.data())
      return data.data()
    }

    // Datra inside document props.page_claps
    const clapData = getDocData(myDoc)

    const incrementClapsCounter = () => {
      setClapsCounter(prevState => prevState + 1);
      setNewClaps(prevState => prevState + 1);
      
      setDoc(myDoc, {claps_count:newClaps})
    };
  
    const StyledClaps = styled.div`
    padding-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8em;
    position: relative;
    button {
      outline: 0;
      background: white;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      border: 1px solid lightgrey;
      font-size: 2em;
      margin-right: 8px;
      cursor: pointer;
    }
    &::before {
      content: '${props => '+' + props.newClaps}';
      background: var(--carbon);
      opacity: 0;
      color: white;
      padding: 8px 12px;
      border-radius: 3px;
      position: absolute;
      z-index: 1;
      top: 3px;
      left: 6px;
      transition: opacity .2s 1s, top .2s 1s;
    }
    &:active::before {
      opacity: 1;
      top: -12px;
      transition: opacity .2s, top .2s;
    }
  `;

  useEffect(() => {

    !'claps_count' in clapData ? setClapsCounter(clapData['claps_count']) : setClapsCounter(0);

  }, []);

    return (
        <div>
            <button onClick={incrementClapsCounter} >👏</button> {clapsCounter}
        </div>
    )
}
