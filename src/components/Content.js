import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
           <div className = {this.props.cls}>
               {this.props.content}
           </div>
        );
    }
}
export default Content