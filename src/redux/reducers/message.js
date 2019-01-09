import {
  SET_MESSAGE_CONTENT,
  CLEAR_MESSAGE_CONTENT,
} from '../constants/message';

const initState = {
  content: undefined,
  type: 'info',
  counter: 0,
};

export default function message(state = initState, action) {
  switch (action.type) {
    case SET_MESSAGE_CONTENT:
      return {
        ...state,
        content: action.content,
        type: action.contentType,
        counter: state.counter + 1,
      };
    case CLEAR_MESSAGE_CONTENT:
      return {
        ...state,
        content: undefined,
      };
    default:
      return state;
  }
}
