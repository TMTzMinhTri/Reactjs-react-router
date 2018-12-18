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
                </Container>
            </div>
        );
    }
}
export default Footer