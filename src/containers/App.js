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
  }
  render() {
    return (
      <div className="container">
        <h3>
          <a href="/" className="brand-logo center">Coyote-Forum</a>
        </h3>

        <div className="row">
          <div className="col-lg offset-4">
            {!this.props.forum.accessToken ? (
              <div className="login-container">
                <LoginComponent {...this.props} />
              </div>
            ) :
              (<div>
                <UserHomeComponent {...this.props}/>
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
    forum: state.Forum
  };
}

function matchDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, forumActions), dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);