export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.timeoutLogout = false;
  },
  setTimeoutLogout(state) {
    state.timeoutLogout = true;
  }
};
