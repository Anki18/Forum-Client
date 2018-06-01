import React, { Component } from 'react';

class UserHomeComponent extends Component {
    constructor(props) {
        super(props);
        if(!props.user.username && !props.user.email){
            props.getUserDetails(props.user.userId, props.user.accessToken);
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <h4>Ask Question</h4>
                    <div className="input-field">
                        <input type="text" name="title" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Content</label>
                    </div>
                    <input type="submit" value="Post" className="btn" />
                </form>
            </div>
        )
    }
}

export default UserHomeComponent;