import { setUser, clearUser } from 'actions/auth';
import { parseJSON } from 'utils/functions';

export default {
  login(model) {
    this.replace(model);
  },

  logout() {
    AppContext.store.dispatch(clearUser());
    this.removeUserFromStorage();
  },

  replace(model) {
    AppContext.store.dispatch(setUser(model));
    this.setUserIntoStorage(model);
  },

  rewind() {
    AppContext.store.dispatch(setUser(this.getUserFromStorage()));
  },

  setUserIntoStorage(model) {
    localStorage.setItem('user', JSON.stringify(model));
  },

  getUserFromStorage() {
    const userStr = localStorage.getItem('user');
    return parseJSON(userStr, null);
  },

  removeUserFromStorage() {
    localStorage.removeItem('user');
  },

  goLogin() {
    AppContext.history.push('/login', {
      from: AppContext.history.location,
    });
  },

  goBack(defaultPath = '/') {
    const { from } = AppContext.history.location.state || {};
    AppContext.history.push(from || defaultPath);
  },
};
