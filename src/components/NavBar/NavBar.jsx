import React from 'react';
import {connect} from 'react-redux'


const NavBar = (props) => {
  return (
    <nav className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="navbar-header">
        <button type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={props.handleToggleNavMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">Dashboard</a>
      </div>
      {props.children}
    </nav>
  )
}

export default connect()(NavBar)
