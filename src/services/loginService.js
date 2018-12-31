export default {
  post(model, options = {}) {
    return AppContext.httpClient.post('v1/login', {
      json: {
        LoginForm: model,
      },
      ...options,
    });
  },
};
