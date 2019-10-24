import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Menu from '../views/Menu/Menu'
import Order from '../views/Order/Order'
import Carts from '../views/Carts/Carts'
import User from '../views/User/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
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
