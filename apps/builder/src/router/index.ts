import { createRouter, createWebHistory } from 'vue-router'

import Actions from '@/views/Actions.vue'
import App from '@/views/App.vue'
import DataSource from '@/views/DataSource.vue'
import Page from '@/views/Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      component: App,
      redirect: '/app/page',
      children: [
        {
          path: 'page',
          name: 'page',
          component: Page
        },
        {
          path: 'dataSource',
          name: 'dataSource',
          component: DataSource
        },
        {
          path: 'actions',
          name: 'actions',
          component: Actions
        }
      ]
    }
  ]
})

export default router
