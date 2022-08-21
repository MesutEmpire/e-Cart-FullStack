import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {UserAuthStore} from "@/stores/UserAuth";
import {UserStore} from "@/stores/Users";
import {ProductStore} from "@/stores/Products";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import('../views/PageNotFoundView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',

    component: () => import('../views/SignUpVIew.vue')
  },
  {
    path: '/SuperUser/',
    name: 'SuperUser',
    component: () => import('../views/SuperUserView.vue'),
    // redirect: to => {
    //   return {path: '/SuperUser/dashboard'}
    // },
    beforeEnter:(to, from,next)=>{
      const authStore = UserAuthStore()
      const userStore = UserStore()
      const productsStore = ProductStore()
      authStore.authAdmin()
          .then(()=> {
            userStore.showAllUsers()
            productsStore.fetchProducts()
            next()
          })
          .catch(()=>{
            next({name:'home'})
          })
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('../components/DashBoard.vue'),
      },
      {
        path: 'users',
        component: () => import('../components/AllUsers.vue'),
      },
      {
        path: 'products',
        component: () => import('../components/AllProducts.vue'),

      },
      {
        path: 'products/add-product',
        component: () => import('../components/addProduct.vue'),
      }
    ],

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
