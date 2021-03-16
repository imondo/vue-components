import { createRouter, createWebHashHistory } from 'vue-router';
import { menu } from './config';
import LayoutUI from './layouts/layout-ui';
import LayoutNav from './layouts/layout-nav';

const loadComponents = menu => {
  const routes = [];
  for (const comp of menu) {
    const { path } = comp;
    const res = `${path}-demo.vue`;
    const item = {
      path: '/' + path,
      component: () => import(`@/demo/${res}`)
    };
    routes.push(item);
  }
  return routes;
};

const compRoutes = loadComponents(menu);

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: LayoutUI,
    children: [
      {
        path: 'index',
        component: () => import('./components/main.vue')
      },
      ...compRoutes
    ]
  },
  {
    path: '/nav',
    component: LayoutNav,
    redirect: '/nav/page',
    children: [
      {
        path: 'page',
        component: () => import('./components/nav.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
