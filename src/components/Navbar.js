import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout() {
    if (this.props.user.username || this.props.user.accessToken) {
      this.props.logout();
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <a href="#" className="brand-logo">Coyote-Forum</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

              {!this.props.user.accessToken ? (<li>
                <NavLink
                  to='/login'
                  activeClassName="active"
                >Login</NavLink>
              </li>) : ((<li className ="green-text">
                Hello {this.props.user.username}
              </li>))
              }
              <li>
                <NavLink
                  to='/userhome'
                  activeClassName="active"
                >UserHome</NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  activeClassName="active"
                >About</NavLink>
              </li>
              <li>
                <NavLink
                  to='/threads'
                  activeClassName="active"
                >Questions</NavLink>
              </li>
              {this.props.user.accessToken ? (<li>
                <NavLink
                  to='/'
                  activeClassName="active"
                  onClick={this.logout}
                >Logout</NavLink>
              </li>) : null}

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;