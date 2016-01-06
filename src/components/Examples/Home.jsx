import React from 'react';
import {connect} from 'react-redux';
import TableContainer from '../BootstrapComponents/Table/TableContainer.jsx'
import Panel from '../BootstrapComponents/Panel/Panel.jsx'
import SQLInstanceInfoContainer from '../SQLInstanceInfo/Container.jsx'

const Home = (props) => {
  const panelConfig = {
    showHeading: true,
    title: 'Table!',
    panelType: 'panel-info'
  }
  return (
    <div>This is the Home component
      <Panel {...panelConfig}><TableContainer/></Panel>
      <SQLInstanceInfoContainer />
    </div>
  )
}

export default connect()(Home);
