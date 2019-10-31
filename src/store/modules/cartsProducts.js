import { cartsProducts } from '../../api/product'

export default {
  namespaced: 'true',
  state: {
    cartsList: [],
    total: 0,
    num: 0,
    buyArr: []
  },
  mutations: {
    save(state, payload) {
      state.cartsList = payload
      // console.log(payload)
      // console.log(payload.length)
      state.num = 0
      for (let i = 0; i < payload.length; i++) {
        state.num += payload[i].quantity
      }
      // console.log(state.num)
    },
    count(state, payload) {
      // console.log(payload)
      state.buyArr = payload
      // console.log(state.buyArr)
      state.total = 0
      for (let i = 0; i < payload.length; i++) {
        state.total += payload[i].product.price * payload[i].quantity
      }
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
