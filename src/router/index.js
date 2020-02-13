import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*** Simpler Hardcoded Way ***/

import Home from '@/views/Home'
import Mechanics from '@/views/Mechanics'
import Body from '@/views/Body'
import Spark from '@/views/Spark'
import Bio from '@/views/Bio'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mechanics/:id',
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
  }
]

/*...................................*/

// We can create a custom class in order to generate these objects
// instead of importing explicity above and, register in the routes array

// I am just showing as an advanced example, please keep in your mind
// routes can contain more than general fields (path, name, component) 
// according to project needs, hardcoded (simpler version) maybe more self explanatory/easy maintable

// For this example: name should be same with the filename
// If you need to use different route name and filename then you should add one more param to object such as (path, name, filename)
/* class Route {
  constructor (path, name) {
    this.path = path;
    this.name = name;
    this.component = this.setComponent(name)
  } */

  // This is Lazy Loading Routes
  // It combines async component feature && code splitting feature
  // Please read more: https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
/*   setComponent(name){
    return resolve => require(['../views/' + name + '.vue'], resolve);
  }
}

const routes = [
  new Route('/', 'Home'),
  new Route('/mechanics', 'Mechanics'),
  new Route('/body', 'Body'),
  new Route('/spark', 'Spark'),
  new Route('/bio', 'Bio'),
] */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
