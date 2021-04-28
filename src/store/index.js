import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    coachesRoot: coachesModule,
    requestsRoot: requestsModule,
    authRoot: authModule
  }
});
export default store;
