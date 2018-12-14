import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import ProductsModels from './ProductsModels'

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Row><i className="fab fa-facebook">This is my facebook</i></Row>
                </Col>
                <Col>
                    <ProductsModels />
                </Col>
            </Row>
        );
    }
}
export default Footer