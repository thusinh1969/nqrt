import React, { Component } from "react"
import 'semantic-ui-css/semantic.min.css'

import nqrt_background from "./nqrt_background_1.jpeg"

class MainPage extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <img class="ui medium centered image" src={nqrt_background} alt="NQRT"></img>
        </div>
    }
}

export default MainPage