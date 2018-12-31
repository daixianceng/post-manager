import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/login';

const initState = {
  data: undefined,
  messages: undefined,
  loading: false,
};

export default function login(state = initState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        messages: action.errorMessages,
      };
    default:
      return state;
  }
}
