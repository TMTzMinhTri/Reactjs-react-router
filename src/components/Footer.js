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
                        <Col xs="12" md ='3' className = "d-flex justify-content-center flex-sm-column flex-md-row">{ icfb } <p> This is my facebook</p></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center flex-sm-column flex-md-row">{ icins } <p> This is my instagram</p></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center flex-sm-column flex-md-row">{ ictwitter } <p> This is my twitter</p></Col>
                        <Col xs="12" md ='3' className = "d-flex justify-content-center flex-sm-column flex-md-row">{ icgithub } <p> This is my github</p></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Footer