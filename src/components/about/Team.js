import React from 'react';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col
} from 'reactstrap';

class Team extends React.Component {
    render() {
        return (
            <Col md='4' sm='12' className="mt-2">
                <Card className='img2'>
                    <CardImg top width="100%"
                        src={this.props.item.imgURL}
                        alt="Card image cap"
                        className='img2'
                    />
                    <CardBody>
                        <CardTitle>Họ tên: {this.props.item.name}</CardTitle>
                        <CardText> Mã số sinh viên: {this.props.item.MSSV}</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Team;