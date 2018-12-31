export default {
  getPosts(params, options = {}) {
    return AppContext.httpClient.get('/v1/posts', {
      searchParams: params,
      ...options,
    });
  },
  getTags(options = {}) {
    return AppContext.httpClient.get('/v1/post-tags', options);
  },
};
