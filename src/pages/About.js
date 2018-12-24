import React, { Component } from 'react';
import {
    Container, Row,
} from 'reactstrap';
import axios from 'axios';

import Team from "../components/about/Team"
import Page from "./Page";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: []
        }
    }

    onOpenModal() { }

    componentDidMount() {
        let url = 'http://localhost:3001/myTeam';
        axios.get(url)
            .then((res) => {
                let member = res.data;
                this.setState({
                    member : member
                })
            })
    }

    showAbout() {
        let _data = this.state.member;
        console.log(_data);
        let content = [];
        content.push(
            <div key='one' className=''>
                <p className="h2 text-center z">Các thành viên trong nhóm</p>
                <Container className='align-items-sm-center '>
                    <Row className='mt-4'>
                        {_data.map(item => (<Team item={item} />))}
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