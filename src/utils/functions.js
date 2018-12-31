import { DATA_STATUS_SUCCESS } from './constants';

export function resultIsSuccess(result) {
  return result.status === DATA_STATUS_SUCCESS;
}

export function parseJSON(string, defaultValue = false) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return defaultValue;
  }
}
