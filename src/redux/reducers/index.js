import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import message from './message';

export default combineReducers({
  auth,
  login,
  message,
});
