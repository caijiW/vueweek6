import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import ('../views/FrontLayoutView.vue'),
      children:[
        {
          path: '/',
          component: () => import('../views/frontPage/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/frontPage/AboutView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/frontPage/ProductsView.vue')
        },
        {
          path: 'product/:id',
          component: () => import('../views/frontPage/ProductView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/frontPage/LoginView.vue')
        },
        
      ] 
    },
    // {
    //   path: '/about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/frontPage/AboutView.vue')
    // }
  ]
})

export default router
