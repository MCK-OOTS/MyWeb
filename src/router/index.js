import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/gh-pages-test/'),

  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },

  ]
})

export default router
