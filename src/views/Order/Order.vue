<template>
  <div class="order">
    <van-nav-bar title="订单列表"></van-nav-bar>
    <van-tabs v-model="active" title-active-color="rgba(144, 192, 239, 1)" color="rgba(144, 192, 239, 1)">
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
  </div>
</template>

<script>
import Done from '../../components/Order/Done'
import UnDone from '../../components/Order/UnDone'

export default {
  name: 'Order',
  components: {
    Done,
    UnDone
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>
