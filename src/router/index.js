import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Menu from '../views/Menu/Menu'
import Order from '../views/Order/Order'
import Carts from '../views/Carts/Carts'
import Confirm from '../views/Carts/Confirm'
import Pay from '../views/Carts/Pay'
import Succeed from '../views/Carts/Succeed'
import PayCenter from '../views/Carts/PayCenter'
import TakeFood from '../views/Carts/TakeFood'
import Cancel from '../views/Carts/Cancel'
import User from '../views/User/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      isHide: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login//Register.vue'),
    meta: {
      isHide: true
    }
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
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/Order/Evaluate.vue'),
    meta: {
      isHide: true
    }
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm,
    meta: {
      isHide: true
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    meta: {
      isHide: true
    }
  },
  {
    path: '/succeed',
    name: 'Succeed',
    component: Succeed,
    meta: {
      isHide: true
    }
  },
  {
    path: '/payCenter',
    name: 'PayCenter',
    component: PayCenter,
    meta: {
      isHide: true
    }
  },
  {
    path: '/takeFood',
    name: 'TakeFood',
    component: TakeFood,
    meta: {
      isHide: true
    }
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel,
    meta: {
      isHide: true
    }
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
