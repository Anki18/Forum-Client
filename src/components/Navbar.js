import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ThreadComponent from './ThreadComponent';

class Navbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Coyote-Forum</a>
            
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            <ul className="right hide-on-small-only">
              <li><Link to="/"><i className="fa fa-users"></i> Coyote-Forum</Link></li>         
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/"><i className="fa fa-users"></i> Coyote-Forum</Link></li>  
            <li><Link to="/thread"><i className="fa fa-plus"></i> View Threads</Link></li>  
            <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li> 
            </ul>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navbar;