import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Menu from '../views/Menu/Menu'
import Order from '../views/Order/Order'
import Carts from '../views/Carts/Carts'
import User from '../views/User/User'
import Details from '../views/Menu/Details'
import Welcome from '../views/Welcome/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: {
      isHide: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    meta: {
      isHide: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
