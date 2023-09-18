import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/index.vue')
  },
  {
    path: '/LoginSignUp',
    name: 'LoginSignUp',
    component: () => import('../components/LoginSignup.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/UserHome.vue')
  },
  {
    path: '/AdminHome',
    name: 'AdminHome',
    component: () => import('../components/AdminHome.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: () => import('../components/Registration.vue')
  },
  
]

const router = createRouter({
  base: '/',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
