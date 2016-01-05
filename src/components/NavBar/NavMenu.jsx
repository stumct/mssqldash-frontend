import React from 'react';
import {connect} from 'react-redux'

const NavMenu = (props) => {
  const {appWindow} = props;
  return (
    <div className="navbar-default sidebar" role="navigation">
      <div style={{minHeight:appWindow.height}} className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <li className="sidebar-search">
            <div className="input-group custom-search-form">
              <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </li>
            <li>
              <a href="index.html">
                <i className="fa fa-dashboard fa-fw"></i>
                Dashboard</a>
            </li>
            <li>
              <a href="tables.html">
                <i className="fa fa-table fa-fw"></i>
                Tables</a>
            </li>
            <li>
              <a href="forms.html">
                <i className="fa fa-edit fa-fw"></i>
                Forms</a>
            </li>
          </ul>
        </div>

      </div>
)
}

function filterState(state){
  return {
    appWindow: state.appWindow,
    navbar: state.navbar
  }
}

export default connect()(NavMenu);
