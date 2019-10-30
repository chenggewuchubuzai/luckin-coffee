import { cartsProducts } from '../../api/product'

export default {
  namespaced: 'true',
  state: {
    cartsList: [],
    total: 0
  },
  mutations: {
    save(state, payload) {
      state.cartsList = payload
      // console.log(payload)
    },
    addCount(state, payload) {
      state.total += payload.product.price * payload.quantity
    },
    subCount(state, payload) {
      state.total -= payload.product.price * payload.quantity
    },
    addOne(state, payload) {
      state.total += payload.product.price
    },
    subOne(state, payload) {
      state.total -= payload.product.price
    }
  },
  actions: {
    async loadCartData({ commit }, payload) {
      const result = await cartsProducts()
      // console.log(result)
      commit('save', result.data)
    }
  }
}
