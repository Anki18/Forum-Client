import React , { Component } from 'react';
// import { Link, Route } from "react-router-dom";
import ThreadComponent from "./ThreadComponent";

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e){
        e.preventDefault();
        var cred ={
            "username" : e.target[0].value,
            "password" : e.target[1].value
        }
        this.props.login(cred);
        //this.props.history.push('/thread');
      }
    render(){
    return (
        <div>
        <h5>Login</h5>
        <form onSubmit={this.onSubmit}>
            <div className="input-field">
                <input type="text" name="uname" />
                <label htmlFor="uname">Username/Email</label>
            </div>
            <div className="input-field">
                <input type="password" name="password" />
                <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" className="btn" />
        </form>
        </div>
    );
}
};

export default LoginComponent;

