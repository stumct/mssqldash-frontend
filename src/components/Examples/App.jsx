import React from 'react';
import {connect} from 'react-redux';
import {resizeWindow} from '../../redux/actions/index.js'
import ContentContainer from '../Content/ContentContainer.jsx'
import NavBarContainer from '../NavBar/NavBarContainer.jsx'
import NavSideMenu from '../NavBar/NavSideMenu.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.handleResize = this.handleResize.bind(this)
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render () {
    const {dispatch, appWindow} = this.props
    return (
      <div>
        <NavBarContainer />
        <ContentContainer>
          <div className="navmenu-container col-sm-3 col-lg-2">{appWindow.width >= 768 ? <NavSideMenu /> : null}</div>
          <div className="col-sm-9 col-lg-10">{this.props.children}</div>
        </ContentContainer>
      </div>
    )
  }
  handleResize(){
    const {dispatch} = this.props
    dispatch(resizeWindow(window.innerWidth,window.innerHeight));
  }
}

function filterState(state){
  return {
    appWindow:state.appWindow
  }
}
export default connect(filterState)(App);
