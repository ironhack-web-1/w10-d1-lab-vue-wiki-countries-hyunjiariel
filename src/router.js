import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'list' */ './components/NavBar.vue'),
      },    
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: 'list' */ './components/Profile.vue'),
      },
  ];

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView();
    }
  });
  
  export default router;