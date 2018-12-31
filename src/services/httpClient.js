import ky from 'ky';

import { auth, errorResponse } from 'services/interceptors';

export default ky.extend({
  prefixUrl: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
  throwHttpErrors: false,
  hooks: {
    beforeRequest: [auth.beforeRequest],
    afterResponse: [errorResponse.afterResponse],
  },
});
