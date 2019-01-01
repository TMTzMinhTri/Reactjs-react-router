import React, { Component } from 'react';
// import {
//     Row, Col, Card, CardImg, CardText, CardBody,
//     CardTitle, Button, Container,CardLink
// } from 'reactstrap';
// import Modal from "react-responsive-modal";

import Slide from '../components/Slide';
import Page from './Page';

import ProductContainer from '../components/products/ProductContainer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    buildContent() {
        // const { productSale, open } = this.state;
        let content = [];
        content.push(<Slide key="1" />)
        content.push(
            <ProductContainer key="2" title="San Pham Moi" type="new"></ProductContainer>
        )

        content.push(
            <ProductContainer key="3" title="San Pham ban chay" type="banchay"></ProductContainer>
        )


        return <div key="line1">{content}</div>
    }
    render() {
        return (
            <Page cls="home-page" content={this.buildContent()} />
        );
    }
}
export default Home