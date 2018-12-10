import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import Page from './Page';


class Home extends Component {
    buildContent() {
        let _content = [];
        _content.push(
            <div key="line1">
            </div>
        )
        _content.push(
            <div key="line2">Line 2</div>
        )
        return _content;
    }
    render() {
        return (
            <div>
                <Page cls="home-page" content = {this.buildContent()}/>
            </div>
        );
    }
}
export default Home