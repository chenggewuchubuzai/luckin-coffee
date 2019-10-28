import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Menu from '../views/Menu/Menu'
import Order from '../views/Order/Order'
import Carts from '../views/Carts/Carts'
import User from '../views/User/User'
import Geren from '../views/User/geren'
import Duihuan from '../views/User/duihuan'
import Zhanghu from '../views/User/zhanghu.vue'
import Coffer from '../views/User/coffer.vue'
import Fapiao from '../views/User/fapiao.vue'
import Dingdan from '../views/User/two/dingdan.vue'
import Qiye from '../views/User/two/qiye.vue'
import yonghuming from '../views/User/two/yonghuming.vue'
import test from '../views/User/two/vue.vue'

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
    component: User,

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
  }, {
    path: '/zhanghu',
    name: 'Zhanghu',
    component: Zhanghu,
    meta: {
      isHide: true
    }
  }, {
    path: '/coffer',
    name: 'Coffer',
    component: Coffer,
    meta: {
      isHide: true
    }
  }, {
    path: '/fapiao',
    name: 'Fapiao',
    component: Fapiao,
    meta: {
      isHide: true,
    }
  },
  {
    path: '/dingdan',
    name: 'Dingdan',
    component: Dingdan,
  },
  {
    path: '/qiye',
    name: 'Qiye',
    component: Qiye,
  }, {
    path: '/geren/yonghuming',
    name: 'yonghuming',
    component: yonghuming,
  }, {
    path: '/ge',
    name: 'y',
    component: test,
  }




]

const router = new VueRouter({
  routes
})

export default router
