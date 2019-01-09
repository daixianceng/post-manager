import {
  SET_MESSAGE_CONTENT,
  CLEAR_MESSAGE_CONTENT,
} from '../constants/message';

export function setError(error) {
  return setContent(error instanceof Error ? error.message : error, 'error');
}

export function setSuccess(content) {
  return setContent(content, 'success');
}

export function setContent(content, type = 'info') {
  return {
    type: SET_MESSAGE_CONTENT,
    content,
    contentType: type,
  };
}

export function clearContent() {
  return {
    type: CLEAR_MESSAGE_CONTENT,
  };
}
