import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const NavMenuItem = (props) => {
  return (
        <Link to={props.linkTo}><i className={props.iconClass}></i>{props.linkText}</Link>
  )
}

export default connect()(NavMenuItem);
