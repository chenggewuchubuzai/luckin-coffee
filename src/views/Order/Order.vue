<template>
  <div class="order">
    <h1>订单列表</h1>
    <section>
      <van-tabs
        v-model="active"
        :offset-top="44"
        animated
        sticky
        title-active-color="rgba(144, 192, 239, 1)"
        color="rgba(144, 192, 239, 1)"
      >
        <van-tab title="全部">
          <UnDone></UnDone>
          <Done></Done>
        </van-tab>
        <van-tab title="未完成">
          <UnDone></UnDone>
        </van-tab>
        <van-tab title="已完成">
          <Done></Done>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import Done from '../../components/Order/Done'
import UnDone from '../../components/Order/UnDone'
import { mapState, mapMutations, mapActions } from 'vuex'
import { getToken } from '../../utils/token'

export default {
  name: 'Order',
  data() {
    return {
      animated: true
    }
  },
  components: {
    Done,
    UnDone
  },
  data() {
    return {
      active: 0
    }
  },
  created() {
    if (getToken()) {
      this.loadOrderData()
    }
  },
  methods: {
    ...mapActions('order', ['loadOrderData'])
  }
}
</script>

<style scoped>
h1 {
  width: 7.5rem;
  height: 0.88rem;
  top: 0.2rem;
  color: rgba(56, 56, 56, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 0.36rem;
  line-height: 0.88rem;
  text-align: center;
  font-weight: bold;
}
.order {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
section {
  flex: 1;
  overflow: auto;
}
</style>
