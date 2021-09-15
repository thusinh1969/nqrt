import React, { Component } from "react"
import { Header, Icon } from "semantic-ui-react"

class Footer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h2 class="ui dark small center aligned icon header">
                    (C) Nhà Quê Ra Tỉnh. Phiên bản thử nghiệm.
                </h2>
            </div>
        )
    }
}

export default Footer
