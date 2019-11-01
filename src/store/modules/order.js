import { orderList } from '../../api/order'

export default {
  namespaced: 'true',
  state: {
    succeedList: [],
    unfinishedList: []
  },
  mutations: {
    save(state, payload) {
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].isPayed == true) {
          state.succeedList.push(payload[i])
        } else {
          state.unfinishedList.push(payload[i])
        }
      }
    }
  },
  actions: {
    async loadOrderData({ commit }, payload) {
      const result = await orderList()
      const order = result.data.orders
      console.log(order)
      commit('save', order)
    }
  }
}