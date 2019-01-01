import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
} from 'reactstrap';

import { cartContext } from "../Cart"

class Product extends React.Component {

    render() {
        return (
            <Col md='4' sm='12' className="mt-2">
                <Card>
                    <CardImg top width="100%"
                        src={this.props.item.imgURL}
                        alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.item.name}</CardTitle>
                        <CardText>{this.props.item.discription}</CardText>
                        <cartContext.Consumer>
                            {({addToCart}) =>  <Button onClick= {() => addToCart(this.props)}>Thêm vào giỏ</Button> } 
                        </cartContext.Consumer>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Product;