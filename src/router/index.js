import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*** Simpler Hardcoded Way ***/

import NotFound from '@/views/NotFound'

import Home from '@/views/Home'
import Mechanics from '@/views/Mechanics'
import Body from '@/views/Body'
  import BodyFocus from '@/views/Body/BodyFocus'
  import Geometry from '@/views/Body/Geometry'
  import Meditation from '@/views/Body/Meditation'
import Spark from '@/views/Spark'
  import Affirmations from '@/views/Spark/Affirmations'
  import Insights from '@/views/Spark/Insights'
import Bio from '@/views/Bio'

const routes = [
  // If there is not matched case 
  // You can redirect to any route
  {
    path: '*',
    redirect: '404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  // or basically you can register, any others route to particular component
  // of course this time url won't change
  /* {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }, */
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mechanics/:id',
    name: 'Mechanics',
    component: Mechanics
  },
  {
    path: '/body',
    name: 'Body',
    component: Body,
    /* 
      child path can't start with "/" if you use "/" this means you are defining this route in root level 
      rather than http://localhost:8080/body/meditation
      http://localhost:8080/meditation
      
    */
    children: [
      {
        path: 'meditation/:mID',
        name: 'Meditation',
        component: Meditation
      },
      {
        path: 'body-focus',
        name: 'BodyFocus',
        component: BodyFocus
      },
      {
        path: 'geometry',
        name: 'Geometry',
        component: Geometry
      },
    ]
  },
  {
    path: '/spark',
    name: 'Spark',
    component: Spark,
    children: [
      {
        path: 'affirmations/:mID',
        name: 'Affirmations',
        component: Affirmations
      },
      {
        path: 'insights',
        name: 'Insights',
        component: Insights
      },
      {
        path: 'geometry',
        name: 'Geometry',
        component: Geometry
      },
    ]
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
