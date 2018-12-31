import { SET_USER, CLEAR_USER } from '../constants/auth';

const initState = {
  user: null,
};

export default function login(state = initState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.data,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
