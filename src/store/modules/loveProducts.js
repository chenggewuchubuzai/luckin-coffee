import { products } from '../../api/product'
export default {
  namespaced: 'true',
  state: {
    loveList: []
  },
  mutations: {
    save(state, payload) {
      state.loveList = payload.list
    }
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products({
        per: 3
      })
      // console.log(result.data.products)
      commit('save', { list: result.data.products })
    }
  }
}
