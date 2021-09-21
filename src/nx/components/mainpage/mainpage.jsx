import React, { Component } from "react"
import 'semantic-ui-css/semantic.min.css'

import { Container, Row, Col } from 'react-grid-system';

import nqrt_background from "./nqrt_background_1.jpeg"
import nqrt_1 from "./1.jpeg"
import nqrt_2 from "./2.jpeg"
import nqrt_3 from "./3.jpeg"


class MainPage extends Component {
    constructor() {
        super()
    }

    render() {
        return <div style={{"align-items":"center"}}>
            <Container>
                <Row style={{"padding":"40px", "width":"auto", "display":"flex", "flex-direction":"row", "align-items":"center"}}>
                    <Col sm={4} style={{"width":"auto", "display":"flex", "flex-direction":"column"}}>
                        <img class="ui large centered image" src={nqrt_background} alt="NQRT"></img>
                    </Col>
                    <Col sm={6}><br/><h3><b>Nội thất của bạn có phong cách gì?</b></h3>
                        <br/>
                        <p><h4>NQRT sẽ giúp xác định phong cách nội thất ngôi nhà của bạn chỉ với một bức ảnh. Phong cách là gì cơ ? Phong cách Á Đông, đương đại, hơi hướng Địa trung hải, kiểu Pháp, phong cách bụi cũ kỹ, pha lẫn phong thái cổ từ giữa thế kỷ, hay phá cách pha trộn hài hòa Eclectics. Rất thú vị. Bỏ núi tiền làm nhà mà không rõ phong cách hay gu thẩm mỹ thì cũng … phí, nhỉ!
                        </h4></p>
                    </Col>
                </Row>
                <hr/>
                <Row style={{"padding":"40px", "width":"auto", "display":"flex", "flex-direction":"row", "align-items":"center"}}>
                    <Col sm={6}><h3><b>Đi mua nội thất phải “hợp tông”</b></h3>
                        <br/>
                        <p><h4>Nếu bạn đắn đo khi chọn vài trang bị nội thất, một bộ sofa chẳng hạn, có phù hợp với bản vẽ của KTS hoặc hiện trạng nhà mình? Bạn cũng có thể rất thích một món nội thất, đến mức sắp đi mua và cần có gợi ý về mức độ phù hợp với ngữ cảnh nhà bạn ? Hãy để NQRT giúp bạn.
                        </h4></p>
                        <br></br>
                    </Col>
                    <Col sm={6} style={{"width":"40vw", "display":"flex", "flex-direction":"column"}}>
                        <img class="ui large centered image" src={nqrt_1} alt="NQRT"></img>
                    </Col>
                </Row>
                <hr/>
                <Row style={{"padding":"40px", "width":"auto", "display":"flex", "flex-direction":"row", "align-items":"center"}}>
                    <Col sm={6} style={{"width":"40vw", "display":"flex", "flex-direction":"column"}}>
                        <img class="ui large centered image" src={nqrt_3} alt="NQRT"></img>
                    </Col>
                    <Col sm={6}><br/><h3><b>Bạn muốn trang bị mới và trong ngân sách?</b></h3>
                        <br/>
                        <h4><p>Nếu bạn chuẩn bị trang bị mới hoặc tái trang bị nội thất toàn diện, bạn đương nhiên có thể nhờ Kiến trúc sư thiết kế giúp bạn. Và bạn cũng có thể hỏi NQRT để lấy các gợi ý về vô vàn các thiết kế độc đáo CHƯA TỪNG CÓ trên đời nhưng lại hoàn toàn hợp với phong cách bạn chọn.</p>
                            <br/><p>NQRT ngay sau đó sẽ gợi ý trọn gói từng món Nội thất theo bản thiết kế, phù hợp với phong cách bạn chọn và vẫn nằm trong ngân sách của bạn đấy!</p></h4>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default MainPage