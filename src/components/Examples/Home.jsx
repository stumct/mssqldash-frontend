import React from 'react';
import {connect} from 'react-redux';
import TableContainer from '../Table/TableContainer.jsx'

const Home = (props) => <div>This is the Home component<TableContainer /></div>

export default connect()(Home);
