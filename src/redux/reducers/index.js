import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';

export default combineReducers({
  auth,
  login,
});
