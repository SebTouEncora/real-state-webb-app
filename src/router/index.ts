import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'New Building',
      component: () => import('../views/BuildingRecord.vue'),
      meta: {
        cardLoading: false
      }
    },
    {
      path: '/loan',
      name: 'Request MicroLoan',
      component: () => import('../views/RequestMicroLoan.vue'),
      meta: {
        cardLoading: false
      }
    },
    {
      path: '/approve',
      name: 'Approve MicroLoan',
      component: () => import('@/views/ApproveLoan.vue'),
      meta: {
        cardLoading: true
      }
    },
    {
      path: '/invert',
      name: 'Invert',
      component: () => import('@/views/OportunityInvestment.vue'),
      meta: {
        cardLoading: true
      }
    },
    {
      path: '/promisoryNote',
      name: 'PromisoryNote',
      component: () => import('../views/PromisoryNote.vue') 
    },
    {
      path: '/bankMicroLoan',
      name: 'BankMicroLoan',
      component: () => import('../views/BankMicroLoan.vue') 
    }
  ]
})

export default router
