<template>
  <div class="order">
    <van-nav-bar title="订单列表" id="title"></van-nav-bar>
    <section>
      <van-tabs
        v-model="active"
        :offset-top="46"
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
