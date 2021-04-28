export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches?.length > 0;
  },
  // isCoach(state, getters, rootState, rootGetters) {
  isCoach(state, _, _2, rootGetters) {
    const allCoaches = state.coaches;
    const userId = rootGetters.userId;
    return allCoaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetchTimestamp;
    if (!lastFetch) {
      return true;
    }
    const setFetchTimestamp = new Date().getTime();

    return (setFetchTimestamp - lastFetch) / 1000 > 60;
  }
};
