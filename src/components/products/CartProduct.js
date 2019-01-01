import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col,
} from 'reactstrap';

class CartProduct extends React.Component {
    render() {
        // const { props: { cartItem } } = this;
        return (
            <Col md='4' className="mt-2">
                <Card >
                    <CardImg top width="100%"
                        src={this.props.item.item.imgURL}
                        alt="Card image cap" />
                    <CardBody>
                        <CardTitle> {this.props.item.item.name}</CardTitle>
                        <CardText>{this.props.item.item.discription}</CardText>
                    </CardBody>
                </Card>
            </Col>

        )
    }
}

export default CartProduct;