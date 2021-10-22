import React, { Component } from "react"
import 'semantic-ui-css/semantic.min.css'

import { Container, Row, Col } from 'react-grid-system';

import nqrt_background from "./nqrt_background_1.jpeg"
import nqrt_1 from "./1.jpeg"
import nqrt_2 from "./2.jpeg"
import nqrt_3 from "./dvkh.jpg"
import nqrt_4 from "./parts.jpg"
import nqrt_5 from "./recsys.png"


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
                    <Col sm={6}><br/><h3><b>Bạn là cty bán lẻ Nội thất và muốn nâng tầm đội Sales hoặc các nhân viên DVKH cho tư vấn on-line?</b></h3>
                        <br/>
                        <h4><p>NQRT có thể giúp biến một anh chị Sales không chuyên ngành hay DVKH amateur trong nghề Nội thất thành "chuyên gia tư vấn nội thất" một cách cực kỳ đơn giản.</p>
                            <br/><p>Bạn có thể sử dụng bất kỳ công cụ CRM/DVKH hay ChatBot cty bạn đang hiện có và tích hợp với hệ thống API/AI của NQRT là xong!</p></h4>
                        
                    </Col>
                </Row>
                <hr/>
                <Row style={{"padding":"40px", "width":"auto", "display":"flex", "flex-direction":"row", "align-items":"center"}}>
                    <Col sm={6}><h3><b>Bạn muốn sở hữu 1 Máy Tìm Kiếm Qua Ảnh như Google cho các sản phẩm Nội Ngoại thất của cty mình?</b></h3>
                        <br/>
                        <p><h4>NQRT có thể giúp bạn sở hữu 1 Máy Tìm Kiếm Qua Ảnh cực nhanh và chính xác cho chính cty bạn. Có thể là sản phẩm, bán thành phẩm, hay chi tiết thiết kế vốn rất khó nhớ qua ảnh. Nhân viên của bạn sẽ nhanh chóng tìm được các thiết kế hay sản phẩm quá khứ của cty chỉ qua 1 bức ảnh hoặc vài từ gợi ý, nâng cao hiệu suất nhân viên.
                        </h4></p>
                        <br></br>
                    </Col>
                    <Col sm={6} style={{"width":"40vw", "display":"flex", "flex-direction":"column"}}>
                        <img class="ui large centered image" src={nqrt_4} alt="NQRT"></img>
                    </Col>
                </Row>
                <hr/>
                <Row style={{"padding":"40px", "width":"auto", "display":"flex", "flex-direction":"row", "align-items":"center"}}>
                    <Col sm={6} style={{"width":"40vw", "display":"flex", "flex-direction":"column"}}>
                        <img class="ui large centered image" src={nqrt_5} alt="NQRT"></img>
                    </Col>
                    <Col sm={6}><br/><h3><b>Bạn là cty bán lẻ Nội thất ONLINE và muốn chào bán tự động theo gu khách hàng?</b></h3>
                        <br/>
                        <h4><p>NQRT có thể giúp khách hàng của bạn tìm ra đúng sản phẩm phù hợp với thị hiếu, phong cách và nhu cầu của khách hàng trong tập sản phẩm của cty bạn chỉ với 1 bức ảnh hay bản thiết kế mà khách hàng có sẵn.</p>
                            <br/><p>Thú vị hơn, thông qua các hoạt động và hình ảnh trên web/app của bạn mà khách hàng thích xem đi xem lại nhiều lần, NQRT có thể giúp bạn "gợi ý sản phẩm phù hợp" ngay lúc đấy, tăng cơ hội bán hàng ngay lập tức :)!</p></h4>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default MainPage