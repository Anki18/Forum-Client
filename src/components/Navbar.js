import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <a href="#" className="brand-logo">Coyote-Forum</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink
                  to='/login'
                  activeClassName="active"
                >Login</NavLink>
              </li>
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
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;