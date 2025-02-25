import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      component: Home,
      children: [
        // {
        //   path: 'dataSource',
        //   name: 'dataSource',
        //   component: DsView,
        // },
        // {
        //   path: 'layout',
        //   name: 'layout',
        //   component: LayoutView,
        // },
        // {
        //   path: 'actions',
        //   name: 'actions',
        //   component: ActionsView,
        // },
      ]
    }
  ]
})

export default router
