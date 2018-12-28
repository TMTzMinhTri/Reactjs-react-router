import React, { Component } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";


import Page from "./Page";
import Slide from "../components/Slide";
import ProductContainer from "../components/products/ProductContainer";


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            items: Array.from({ length: 0 }),
            hasMore: true,
            type : 'all'
        }
    }

    componentDidMount = () => {
        let url = "http://localhost:4000/api/products";
        if (this.state.items.length >= 100) {
            this.setState({ hasMore: false });
            return;
        }
        axios.get(url)
            .then((res) => {
                let productNew = res.data.filter((item) => {
                    return item.type === this.state.type;
                });
                console.log(productNew);

               
                setTimeout(() => {
                    this.setState({
                        items: this.state.items.concat(Array.from({ length: 10 }))
                    });
                }, 2200);
                this.setState({
                    products: productNew
                });
            })
    }


    showAllProducts = () => {
        // let data = this.state.products;
        console.log(this.state.products)
        var contents = [];
        contents.push(<Slide key="1" />)
        // contents.push(
        //     <div key="2">
        //         <Container className='align-items-sm-center mt-2'>
        //             <p className='text-center m-3 h3'>{this.props.title}</p>
        //             <Row>
        //                 {data.map(item => (<Product item={item} />))}
        //             </Row>
        //         </Container>

        //     </div>
        // )
        contents.push(
            <InfiniteScroll
                ataLength={this.state.items.length}
                next={this.componentDidMount}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <ProductContainer key="2" title="Các sản phẩm hiện có tại shop" type="all" products={this.state.products}></ProductContainer>
            </InfiniteScroll>
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