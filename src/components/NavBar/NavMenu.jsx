import React from 'react';
import {connect} from 'react-redux'
import NavMenuList from './NavMenuList.jsx'

const NavMenu = (props) => {
  const {appWindow} = props;
  return (
    <div className="navbar-default sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
        <NavMenuList />
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

export default connect(filterState)(NavMenu);
