import authHelper from 'utils/authHelper';
import { UNAUTHORIZED, UNPROCESSABLE_ENTITY } from 'utils/constants';
import { parseJSON } from 'utils/functions';
import { setError } from 'actions/message';

export default {
  afterResponse: async response => {
    if (!response.ok) {
      if (response.status === UNAUTHORIZED) {
        authHelper.logout();
        authHelper.goLogin();
      } else if (response.status === UNPROCESSABLE_ENTITY) {
        // Nothing to do
      } else {
        let message = '';
        try {
          const result = await response.text();
          const json = parseJSON(result, null);

          if (typeof json === 'object' && json !== null) {
            message = json.data && json.data.message;
          }
          if (!message) {
            message = result || response.statusText;
          }
        } catch (error) {
          message = error.message;
        }
        AppContext.store.dispatch(setError(message));
      }
    }
  },
};
