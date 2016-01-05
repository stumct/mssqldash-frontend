import './NavBarContainer.less'
import React from 'react';
import {connect} from 'react-redux';
import {navToggleMenu} from '../../redux/actions/index.js'
import NavBar from './NavBar.jsx'
import NavMenu from './NavMenu.jsx'

class NavBarContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {dispatch, navbar, appWindow} = this.props
    return (
      <div>
        <NavBar handleToggleNavMenu={() => dispatch(navToggleMenu())}>
          {navbar.navMenuVisible && appWindow.width < 768 ? <NavMenu /> : null}
        </NavBar>
      </div>
    )
  }
}

function filterState(state){
  return {
    navbar:state.navbar,
    appWindow:state.appWindow
  }
}
export default connect(filterState)(NavBarContainer);
