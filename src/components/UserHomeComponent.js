import React, { Component } from 'react';

class UserHomeComponent extends Component {
    constructor(props) {
        super(props);
        props.getUserDetails(props.forum.userId, props.forum.accessToken);
    }
    render() {
        return (
            <div className="container">
                <h1>Hello {this.props.forum.username}</h1>
            </div>
        )
    }
}

export default UserHomeComponent;