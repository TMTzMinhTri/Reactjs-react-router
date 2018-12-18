import React, { Component } from 'react';
import {
    Container, Row, 
} from 'reactstrap';

import Product from "../components/products/Product"
import Page from "./Page";
import data from "../data";
class About extends Component {
    onOpenModal() { }
    showAbout() {
        let _data = data.getProductList("team");
        let content = [];
        content.push(
            <div key='one' className = ''>
                <p className="h2 text-center z">Các thành viên trong nhóm</p>
                <Container className='align-items-sm-center '>
                    <Row className='mt-4'>
                        {_data.map(item => (<Product item={item} />))}
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