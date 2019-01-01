import React, { Component } from 'react';

import Page from './Page';

import { cartContext } from "../components/Cart";
import CartProduct from '../components/products/CartProduct';
import {
    Container, Row
} from 'reactstrap';
class PageCart extends Component {


    buildContent = () => {
        let content = [];
        content.push(
            <div>
                <h1 className="text-center">Giỏ hàng của tôi</h1>
                <Container className='align-items-sm-center mt-2'>
                    <Row>
                        <cartContext.Consumer>
                            {({ cartItem }) => (
                                cartItem.map(cartItem =>{
                                    return <CartProduct item={cartItem} />
                                })
                            )}
                        </cartContext.Consumer>
                    </Row>
                </Container>
            </div>
        );
        return content;
    }
    render() {
        return (
            <Page content={this.buildContent()}></Page>
        )
    }
}
export default PageCart;