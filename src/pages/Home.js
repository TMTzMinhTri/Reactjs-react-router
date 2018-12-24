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
        
        /*_content.push(
            <div key="line1">
                <Slide />
                <Container>
                    <p className='text-center m-3 h3'>Danh Sách Sản Phẩm</p>
                    <Row>
                        {productSale.map(item => (
                            <Col md='4' sm='5'>
                                <Card>
                                    <CardImg top width="100%"
                                        src={item.imgURL}
                                        alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardText>{item.discription}</CardText>
                                        <Button onClick={this.onOpenModal}>Xem chi tiết</Button>
                                        <Modal open={open} onClose={this.onCloseModal} center>
                                            <Card className = "d-flex">
                                                <CardBody>
                                                    <CardTitle>Card title</CardTitle>
                                                </CardBody>
                                                <img width="100%" src={item.imgURL} alt="Card image cap" />
                                                <CardBody>
                                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                    <CardLink href="#">Card Link</CardLink>
                                                    <CardLink href="#">Another Link</CardLink>
                                                </CardBody>
                                            </Card>
                                        </Modal>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        )*/
        return <div key="line1">{content}</div>
    }
    render() {
        return (
            <div>
                <Page cls="home-page" content={this.buildContent()} />
            </div>
        );
    }
}
export default Home