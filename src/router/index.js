import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/MyWeb/'),

  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import ('../components/NotFound.vue'),
    },

  ],
})

export default router
