import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/index.css'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'

Vue.prototype.$EventBus = new Vue()

Vue.use(Vant)
Vue.use(VueRouter)

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
