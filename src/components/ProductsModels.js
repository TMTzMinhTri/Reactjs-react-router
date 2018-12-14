import React, { Component } from 'react';

import { Button, Modal, Card, CardBody, CardLink, CardTitle, CardText} from 'reactstrap';

class productsModals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }; 

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Card className="d-flex">
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                        </CardBody>
                        <img width="100%" src='' alt="Card image cap" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </Modal>
            </div>
        );
    }
}

export default productsModals;