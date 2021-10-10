import 'reactjs-popup/dist/index.css';
import React from 'react';
import Popup from 'reactjs-popup';

const PopupText = (props) => (
  <Popup trigger={props.trigger} position="right">
    {close => (
      <div style={{"width": "400px", "background-color":"#FFDEAD"}}>
        {props.text}
        <a className="close" onClick={close}>
        <b> (Đóng) </b>
        </a>
      </div>
    )}
  </Popup>
);

export default PopupText;