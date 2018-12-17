import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
} from 'reactstrap';

class Product extends React.Component {
    onOpenModal() { }
    onCloseModal() { }
    render() {
        return (
            <Col md='4' sm='5'>
                <Card>
                    <CardImg top width="100%"
                        src={this.props.item.imgURL}
                        alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.item.name}</CardTitle>
                        <CardText>{this.props.item.discription}</CardText>
                        <Button onClick={this.onOpenModal}>Xem chi tiết</Button>

                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Product;