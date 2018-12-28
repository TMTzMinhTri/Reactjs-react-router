import React from 'react';
import Product from './Product';
import axios from "axios";


import { Row, Container } from 'reactstrap';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        let url = "http://localhost:4000/api/products";
        axios.get(url)
            .then((res) => {
                let productNew = res.data.filter((item) => {
                    return item.type === this.props.type;
                });
                console.log(productNew);

                this.setState({
                    products: productNew
                });
               
            })
    }

    buildContent = () => {
        let _data = this.state.products;
        let _content = [];
        _content.push(
            <div key="line1">
                <Container className='align-items-sm-center mt-2'>
                    <p className='text-center m-3 h3'>{this.props.title}</p>
                    <Row>
                        {_data.map(item => (<Product item={item} />))}
                    </Row>
                </Container>
            </div>
        )
        return _content;
    }

    render() {
        return (
            <div>{this.buildContent(this.props.type)}</div>
        )
    }
}

export default ProductContainer;