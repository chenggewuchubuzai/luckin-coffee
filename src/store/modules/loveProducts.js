import { products } from '../../api/product'

export default {
  namespaced: 'true',
  state: {
    loveList: [],
    page: 1
  },
  mutations: {
    save(state, payload) {
      state.loveList = payload.list
      state.page += 1
    }
  },
  actions: {
    async loadData({ commit }, payload) {
      const result = await products({
        per: 3,
        page: payload
      })
      // console.log(result.data.products)
      commit('save', { list: result.data.products })
    }
  }
}
