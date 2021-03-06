import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'

Vue.prototype.$EventBus = new Vue()

Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
