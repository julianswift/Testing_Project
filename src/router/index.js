import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Mechanics from '@/views/Mechanics'
import Body from '@/views/Body'
import Spark from '@/views/Spark'
import Bio from '@/views/Bio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mechanics',
    name: 'Mechanics',
    component: Mechanics
  },
  {
    path: '/body',
    name: 'Body',
    component: Body
  },
  {
    path: '/spark',
    name: 'Spark',
    component: Spark
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
  /* {
    path: '/about',
    name: 'About',
    component: function () {
      return import('@/views/About.vue')
    }
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
