import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./demo/main.vue')
  },
  {
    path: '/magnifier',
    component: () => import('./demo/magnifier-demo.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
