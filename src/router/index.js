import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardDetails from '../views/CardDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/details/:id',
    name:'CardDetails',
    component:CardDetails,  
    props:true,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
