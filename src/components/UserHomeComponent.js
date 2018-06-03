import React, { Component } from 'react';

class UserHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            topic: "",
            tags: "",
            content: "",
            user_id: props.user.userId ? props.user.userId : "",
            user_email: props.user.email ? props.user.email : "",
            user_shortname: props.user.username ? props.user.username : "",
            
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildRequest = this.buildRequest.bind(this);
    }
    handleOnChange(event) {
        if (event.target.value.length > 0) {
            if (event.target.name === "title") {
                this.setState({ title: event.target.value });
            }
            if (event.target.name === "topic") {
                this.setState({ topic: event.target.value });
            }
            if (event.target.name === "tags") {
                this.setState({ tags: [event.target.value] });
            }
            if (event.target.name === "content") {
                this.setState({ content: event.target.value });
            }
        }
    }
    buildRequest(){
        var date= new Date();
        return Object.assign({}, this.state, {
            user_id: this.props.user.userId ? this.props.user.userId : "",
            user_email: this.props.user.email ? this.props.user.email : "",
            user_shortname: this.props.user.username ? this.props.user.username : "",
            create_date: date.toString(),
            update_date: date.toString(),
            create_date_iso: date.toString(),
            update_date_iso: date.toString(),
          });
    }
    handleSubmit(event) {
        if (this.state.title !== "" && this.state.topic !== "") {
            var req=this.buildRequest();
            this.props.postQuestion(this.props.user.accessToken, req);
            event.preventDefault();
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="blue-text text-darken-2">Ask Question</h5>
                    <hr />
                    <div className="input-field">
                        <input type="text" name="title" onBlur={this.handleOnChange}/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="topic" onBlur={this.handleOnChange}/>
                        <label htmlFor="topic">Topic</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="tags" onBlur={this.handleOnChange}/>
                        <label htmlFor="tags">Tags</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea name="content" className="materialize-textarea" onBlur={this.handleOnChange}></textarea>
                        <label htmlFor="content">Content</label>
                    </div>
                    <input type="submit" value="Post" className="btn" />
                </form>
            </div>
        )
    }
}

export default UserHomeComponent;