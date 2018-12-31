import { SET_USER, CLEAR_USER } from '../constants/auth';

export function setUser(model) {
  return {
    type: SET_USER,
    data: model,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
