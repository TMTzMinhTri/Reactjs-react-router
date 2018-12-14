import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';


class Footer extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Row><i className="fab fa-facebook">This is my facebook</i></Row>
                </Col>
            </Row>
        );
    }
}
export default Footer