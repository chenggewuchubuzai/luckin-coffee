export default {
  namespaced: 'true',
  state: {
    isOutside: false
  },
  mutations: {
    change(state, payload) {
      state.isOutside = !state.isOutside
    }
  }
}
