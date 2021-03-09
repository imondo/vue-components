import { createRouter, createWebHashHistory } from 'vue-router';

const Tem = { template: '<div>Home</div>' };

const routes = [
  {
    path: '/',
    component: Tem
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
