import {navbar} from './navbar';
import {appWindow} from './appWindow';
import {sqlInstances} from './sqlInstances';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  appWindow,
  navbar,
  sqlInstances,
  routing: routeReducer
});
