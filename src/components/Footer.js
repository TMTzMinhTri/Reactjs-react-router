import React, { Component } from 'react';
import { Row, Col, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
// import ProductsModels from './ProductsModels'

import '../../src/App.css'

class Footer extends Component {
    render() {
        const icfb = <FontAwesomeIcon className="fontSize25 mr-2" icon={faFacebook} />
        const icins = <FontAwesomeIcon className="fontSize25 mr-2" icon={faInstagram} />
        const ictwitter = <FontAwesomeIcon className="fontSize25 mr-2" icon={faTwitter} />
        const icgithub = <FontAwesomeIcon className="fontSize25 mr-2" icon={faGithub} />
        return (
            <div className = "bg-light">
                <Container>
                    <Row className = 'p-3 mt-5' >
                        <Col xs="12" md ='3' className = "d-flex justify-content-center align-items-center flex-column flex-md-row">{ icfb } <div> This is my facebook</div></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center align-items-center flex-column flex-md-row">{ icins } <div> This is my instagram</div></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center align-items-center flex-column flex-md-row">{ ictwitter } <div> This is my twitter</div></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center align-items-center flex-column flex-md-row">{ icgithub } <div> This is my github</div></Col>
                    </Row>
                    <Row className= 'h3 justify-content-center'>"ĐẢM BẢO HÀI LÒNG"</Row>
                    <Row>
                        <Col md = '8' className ='m-sm-3'>
                            <Row className = 'flex-column'>
                                <p className = 'h5'>Chất lượng</p>
                                <p>cam kết chất lượng cho tất cả sản phẩm bán tại cửa hàng Shop bằng chính sách bảo hành 365 ngày và chăm sóc trọn đời sau khi hết bảo hành.</p>
                            </Row>
                            <Row className = 'flex-column'>
                                <p className = 'h5'>Phục vụ</p>
                                <p>cam kết chất lượng phục vụ tốt nhất, chuyên nghiệp nhất cho mọi khách hàng bằng chính sách hoàn tiền và tặng quà nếu nhân viên phục vụ quí khách không chu đáo.</p>
                            </Row>
                            <Row className = 'flex-column'>
                                <p className = 'h5'>Hỗ trợ</p>
                                <p>Nếu bạn gặp rắc rối về sản phẩm hay chất lượng dịch vụ của Shop, hãy gọi ngay đến số 090xxxxxxx</p>
                            </Row>
                        </Col>
                        <Col className= 'm-5'>
                            <Row><p>Bảo hành 365 ngày</p></Row>
                            <Row><p>Đặt hàng và thu tiền tận nơi toàn quốc <b>(028) 7307 1441</b></p></Row>
                            <Row><p>Giao hàng Toàn quốc</p></Row>
                            <Row><p>Bảo hành 365 ngày</p></Row>
                            <Row><p>Bảo hành 365 ngày</p></Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Footer