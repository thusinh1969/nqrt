import React, { Component, setState } from "react"
import RecSysShow_Type from "./recsys_show_type"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './recsys_show_type'
import ClapHand from '../claps.jsx';

export default class RecSysShow extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: 0,
        }        

        this._onSelect = this._onSelect.bind(this)

        var options = null
        var data    = null
   }
   
   _onSelect(e) {
       console.log('Call change dropbox', e)
        this.setState({selected:e['value']})
    }

    render() {
        if (this.props.res !== null) {
            this.options = this.props.dropBoxParam
            this.data    = this.props.res
            console.log('PROPS res', this.data, this.state.selected)
            console.log('PROPS dropbox', this.options)
            console.log('CURRENT selected', this.options[this.state.selected])
            return (
                <div>
                    <Dropdown options={this.options} onChange={this._onSelect}
                                                placeholder="Chọn Search Engine" />
                    <div className='container'>
                    <RecSysShow_Type res={this.data[this.state.selected]}/> </div>
                </div>
            )
        }
        return null
        }
    }
//https://www.npmjs.com/package/react-multiple-image-grid
//https://react-grid-carousel.vercel.app/