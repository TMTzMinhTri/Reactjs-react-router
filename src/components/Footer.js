import React, { Component } from 'react';
import { Row, Col, Container, Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import ProductsModels from './ProductsModels'

import '../../src/App.css'

class Footer extends Component {
    render() {
        const element = <FontAwesomeIcon className="fontSize25" icon={faFacebook} />
        return (
            <Navbar>
                <Container>
                    <Row>
                       
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>

                    </Row>
                </Container>

            </Navbar>
        );
    }
}
export default Footer