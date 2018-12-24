import React, { Component } from 'react';
import axios from 'axios';
import {Row, Container} from "reactstrap";

import Page from "./Page";
import Slide from "../components/Slide";
import Product from "../components/products/Product";


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        let url = "http://localhost:3001/products";
        axios.get(url)
            .then((res) => {
                this.setState({
                    products: res.data
                })
            });
    }

    showAllProducts = () => {
        let data = this.state.products;
        var contents = [];
        contents.push(<Slide key="1" />)
        contents.push(
            <div key="2">
                <Container className='align-items-sm-center mt-2'>
                    <p className='text-center m-3 h3'>{this.props.title}</p>
                    <Row>
                        {data.map(item => (<Product item={item} />))}
                    </Row>
                </Container>
            </div>
        )
        return contents;
    }
    render() {
        return (
            <div>
                <Page cls="product-page" content={this.showAllProducts()} />
            </div>
        );
    }
}
export default Products