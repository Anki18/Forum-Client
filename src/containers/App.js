import React, { Component } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MainComponent from '../components/MainComponent';
import Navbar from '../components/Navbar';
import LoginComponent from '../components/LoginComponent';
import UserHomeComponent from '../components/UserHomeComponent';
import { forumActions } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    if(this.props.user.username || this.props.user.accessToken){
      this.props.logout();
    }
  }
  render() {
    return (
      <div className="container">
        <h3>
          <a href="/" className="brand-logo center">Coyote-Forum</a>
          {this.props.user.username ? (<div className="right">
            <h6 >Hello {this.props.user.username}</h6>
            <input
              type="button"
              className ="btn waves-effect waves-light"
              onClick={this.logout}
              value="Logout" />
          </div>) : null}
        </h3>

        <div className="row">
          <div className="col-lg offset-4">
            {!this.props.user.accessToken ? (
              <div className="login-container">
                <LoginComponent {...this.props} />
              </div>
            ) :
              (<div>
                <UserHomeComponent {...this.props} />
              </div>)
            }

          </div>
        </div>
      </div>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg offset-4">
//             <div className="login-container">
//               <MainComponent  {...this.props} />
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }

// }

function mapStateToProps(state) {
  return {
    user: state.User
  };
}

function matchDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, forumActions), dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);