export default {
  namespaced: 'true',
  state: {
    cartsList: [
      {
        id: 1,
        name: '标准美式',
        desc: '大/单份奶/单份糖/热',
        price: '27',
        num: 2
      },
      {
        id: 2,
        name: '香草拿铁',
        desc: '大/单份奶/单份糖/热',
        price: '24',
        num: 3
      },
      {
        id: 3,
        name: '香芋拿铁',
        desc: '大/单份奶/单份糖/热',
        price: '24',
        num: 4
      }
    ]
  },
  mutations: {
    save(state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    async loadData({ commit }, payload) {}
  }
}
