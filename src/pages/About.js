import React, { Component } from 'react';
import Page from "./Page";
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class About extends Component {
    showAbout() {
        let content = [];
        content.push(
            <div key='one'>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
        return content
    }
    render() {
        return (
            <div>
                <Page cls="product-page" content={this.showAbout()} />
            </div>
        );
    }
}
export default About