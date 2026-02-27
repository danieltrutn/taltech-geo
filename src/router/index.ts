import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'
import LocalityView from '../views/LocalityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/locality/:id',
      name: 'lcoality',
      component: LocalityView,
    }
  ],
})

export default router
