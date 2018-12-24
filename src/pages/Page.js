import React, { Component } from 'react';


import Content from '../components/Content';
import Footer from '../components/Footer';
import TopMenu from '../components/TopMenu';
import '../../src/App.css'

class Page extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <Content cls={this.props.cls} content = {this.props.content} />
                <Footer />
            </div>
        );
    }
}
export default Page