import { orderList } from '../../api/order'
export default {
  namespaced: 'true',
  state: {
    orderList: []
  },
  mutations: {},
  actions: {
    async loadOrderData() {
      const result = await orderList()
      console.log(result)
    }
  }
}
