import { cartsProducts } from '../../api/product'

export default {
  namespaced: 'true',
  state: {
    cartsList: [],
    total: 0,
    num: 0,
    buyArr: [],
    zy: 0,
    date: ''
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
      // console.log(state.buyArr)
      state.total = 0
      state.zy = 0

      for (let i = 0; i < state.buyArr.length; i++) {
        state.total += state.buyArr[i].product.price * state.buyArr[i].quantity
        state.zy += state.buyArr[i].product.price * state.buyArr[i].quantity + 6
      }
    },
    clearArr(state) {
      state.buyArr = []
    },
    getDate(state, payload) {
      state.date = payload
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
