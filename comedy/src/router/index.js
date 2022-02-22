import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Seminars from '../views/Seminars.vue'
import Details from '../views/Details.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seminars',
    name: 'Seminars',
    component: Seminars
   
  },
  {

    path:'/seminars/:id',
    name:'Details',
    component:Details,
    props:true

  },
  {
    path:"/contact",
    name:'Contact',
    component:Contact,
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
