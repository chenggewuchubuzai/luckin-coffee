export default {
  namespaced: 'true',
  state: {
    loveList: [
      {
        name: '标准美式',
        desc: '大/单份奶/单份糖/热',
        img: '@/assets/carts_love.png',
        price: '27'
      },
      {
        name: '香草拿铁',
        desc: '大/单份奶/单份糖/热',
        img: '',
        price: '24'
      },
      {
        name: '香芋拿铁',
        desc: '大/单份奶/单份糖/热',
        img: '',
        price: '24'
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
