export default {
  beforeRequest: options => {
    const root = AppContext.store.getState();
    if (root.user) {
      options.headers['Authorization'] = 'Bearer ' + root.user.accessToken;
    }
  },
};
