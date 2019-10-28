import Vue from 'vue'
import Vuex from 'vuex'
import cartsProducts from './modules/cartsProducts'
import loveProducts from './modules/loveProducts'
import isDelivery from './modules/isDelivery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cartsProducts,
    loveProducts,
    isDelivery
  }
})
