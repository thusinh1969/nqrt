import React, { Component } from "react"

class PredictClass extends Component {
    constructor(props) {
        super()
    }

    render() {
        console.log('---> Class display prediction', this.props.res.class)
        return (
            <div>
                <ul>
                    {this.props.res.class.map((data, index) => <li key={index}>{data.Class} {data.score}</li>)}   
                </ul>
            </div>
        )
    }
}

export default PredictClass
