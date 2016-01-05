import React from 'react';
import {connect} from 'react-redux';
import NavMenuItem from './NavMenuItem.jsx';

const NavMenuList = (props) => {
  const {navbar} = props
  return (
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
        {navbar.navMenuItems.map(i => <li key={i.id}><NavMenuItem {...i} /></li>)}
      </ul>
  )
}

function filterState(state){
  return {
    navbar: state.navbar
  }
}

export default connect(filterState)(NavMenuList);
