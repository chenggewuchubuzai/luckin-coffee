import { cartsProducts } from '../../api/product'

export default {
  namespaced: 'true',
  state: {
    cartsList: []
  },
  mutations: {
    save(state, payload) {
      state.cartsList = payload
    }
  },
  actions: {
    async loadCartData({ commit }, payload) {
      const result = await cartsProducts()
      console.log(result)
      commit('save', result.data)
    }
  }
}
