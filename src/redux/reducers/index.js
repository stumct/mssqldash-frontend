import {navbar} from './navbar';
import {appWindow} from './appWindow';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  appWindow,
  navbar,
  routing: routeReducer
});
