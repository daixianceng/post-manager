import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/login';
import { loginService, HTTPError } from 'services';
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
        try {
          const result = await loginService.post(model).json();

          if (resultIsSuccess(result)) {
            dispatch({
              type: LOGIN_SUCCESS,
              data: result.data,
            });
          }
        } catch (error) {
          if (error instanceof HTTPError) {
            if (error.response.status === UNPROCESSABLE_ENTITY) {
              const result = await error.response.json();
              dispatch({
                type: LOGIN_FAIL,
                errorMessages: result.data,
              });
            }
          } else {
            throw error;
          }
        }
      } catch (error) {
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    }
  };
}
