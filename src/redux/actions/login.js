import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/login';
import { loginService } from 'services';
import { UNPROCESSABLE_ENTITY } from 'utils/constants';
import { resultIsSuccess } from 'utils/functions';

export function login(model) {
  return async (dispatch, getState) => {
    const state = getState();
    if (!state.login.loading) {
      dispatch({
        type: LOGIN_START,
      });

      try {
        const response = await loginService.post(model);
        const result = await response.json();

        if (response.status === UNPROCESSABLE_ENTITY) {
          dispatch({
            type: LOGIN_FAIL,
            errorMessages: result.data,
          });
        } else if (resultIsSuccess(result)) {
          dispatch({
            type: LOGIN_SUCCESS,
            data: result.data,
          });
        }
      } catch (error) {
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    }
  };
}
