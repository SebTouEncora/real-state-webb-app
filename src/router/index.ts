import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RequestMicroLoan from "@/views/RequestMicroLoan.vue";
import ApproveLoan from "@/views/ApproveLoan.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'New Building',
      component: () => import('../views/BuildingRecord.vue')
    },
    {
      path: '/loan',
      name: 'Request MicroLoan',
      component: () => import('../views/RequestMicroLoan.vue')
    },
    {
      path: '/approve',
      name: 'Approve MicroLoan',
      component: () => import('@/views/ApproveLoan.vue')
    },
    {
      path: '/invert',
      name: 'Invert',
      component: () => import('@/views/Invert.vue')
    },
  ]
})

export default router
