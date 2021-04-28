// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index';

import CoachesList from './pages/coaches/CoachesList';
// import CoachRegistration from './pages/coaches/CoachRegistration';
// import CoachDetail from './pages/coaches/CoachDetail';
// import ContactCoach from './pages/requests/ContactCoach';
// import RequestsReceived from './pages/requests/RequestsReceived';
// import UserAuth from './pages/auth/UserAuth';
// import NotFound from './pages/NotFound';

// It turns out, it's NOT recommended to use async components for routing (you may use them to conditionally load and fetch component code when working with v-if etc. though).
const NotFound = () => import('./pages/NotFound');
const UserAuth = () => import('./pages/auth/UserAuth');
const RequestsReceived = () => import('./pages/requests/RequestsReceived');
const ContactCoach = () => import('./pages/requests/ContactCoach');
// const CoachDetail = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetail')
// );
const CoachDetail = () => import('./pages/coaches/CoachDetail');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration');
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }] // /coaches/coach111/contact
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { needsAuth: true, notACoach: true }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { needsAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { needsUnAuth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

// router.beforeEach(function(to, from, next) {
router.beforeEach(function(to, _, next) {
  if (to.meta.needsAuth && !store.getters.isAuthenticated) {
    console.log('in here');
    next('/auth');
  } else if (to.meta.needsUnAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else if (
    to.meta.needsUnAuth &&
    store.getters.isAuthenticated &&
    store.getters['coachesRoot/isCoach']
  ) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
