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
import Geren from '../views/User/geren'
import Duihuan from '../views/User/duihuan'
import Zhanghu from '../views/User/zhanghu.vue'
import Coffer from '../views/User/coffer.vue'
import Fapiao from '../views/User/fapiao.vue'
import Dingdan from '../views/User/two/dingdan.vue'
import Qiye from '../views/User/two/qiye.vue'
import yonghuming from '../views/User/two/yonghuming.vue'
<<<<<<< HEAD

=======
>>>>>>> b59d93a020df2d872dece60586007c63aff467bd
import Erweima from '../views/User/two/three/erweima.vue'
import cos from '../views/User/two/three/v.vue'
import Cofferchong from '../views/User/two/three/cofferchong.vue'
import Details from '../views/Menu/Details'
import Welcome from '../views/Welcome/Welcome'
import Shouhuo from '../views/User/two/three/shouhuo.vue'
import Adress from '../views/User/two/three/myadress.vue'
import Delivery from '../views/Carts/delivery.vue'

<<<<<<< HEAD

=======
>>>>>>> b59d93a020df2d872dece60586007c63aff467bd
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
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
    meta: {
      isHide: true
    }
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
  },
  {
    path: '/geren',
    name: 'Geren',
    component: Geren,
    meta: {
      isHide: true
    }
  },
  {
    path: '/duihuan',
    name: 'Duihuan',
    component: Duihuan,
    meta: {
      isHide: true
    }
  },
  {
    path: '/zhanghu',
    name: 'Zhanghu',
    component: Zhanghu,
    meta: {
      isHide: true
    }
  },
  {
    path: '/coffer',
    name: 'Coffer',
    component: Coffer,
    meta: {
      isHide: true
    }
  },
  {
    path: '/fapiao',
    name: 'Fapiao',
    component: Fapiao,
    meta: {
      isHide: true
    }
  },
  {
    path: '/dingdan',
    name: 'Dingdan',
    component: Dingdan
  },
  {
    path: '/qiye',
    name: 'Qiye',
    component: Qiye
  },
  {
    path: '/geren/yonghuming',
    name: 'yonghuming',
    component: yonghuming
  },
<<<<<<< HEAD
  , {
=======

  {
>>>>>>> b59d93a020df2d872dece60586007c63aff467bd
    path: '/coffer/erweima',
    name: 'Erweima',
    component: Erweima
  },
  {
    path: '/cos',
    name: 'Erweima1',
    component: cos
  },
  {
    path: '/cofferchong',
    name: 'Cofferchong',
    component: Cofferchong,
    meta: {
      isHide: true
    }
  },
  {
    path: '/shouhuo',
    name: 'Shouhuo',
    component: Shouhuo,
    meta: {
      isHide: true
    }
  },
  {
    path: '/three/myadress',
    name: 'Adress',
    component: Adress,
    meta: {
      isHide: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
