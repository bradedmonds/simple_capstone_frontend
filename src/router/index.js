import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Concerts from '../views/Concerts.vue'
import All from '../views/All.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/all',
    name: 'All',
    component: All
  },
  {
    path: '/:id',
    name: 'Concerts',
    component: Concerts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
