import React from 'react';
import Product from './Product';
import data from '../../data';

import { Row, Container } from 'reactstrap';

class ProductContainer extends React.Component {
    buildContent(type) {
        let _data = data.getProductList(type);
        let _content = [];
        _content.push(
            <div key="line1">
                <Container className = 'align-items-sm-center mt-2'>
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