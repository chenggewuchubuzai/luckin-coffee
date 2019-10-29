<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow left-text="返回首页" @click-left="onClickLeft" />
    <div class="order-status">
      <p>待付款</p>
      <p>请在<span class="time">18:18</span>内完成支付，过时订单将会取消。</p>
      <div class="btnS">
        <van-button class="btn" style="width:2.1rem;height:0.64rem" :to="{ name: 'Home' }">取消订单</van-button>
        <van-button class="btn" style="width:2.1rem;height:0.64rem" :to="{ name: 'Pay' }">去支付</van-button>
      </div>
    </div>
    <OrderDetail></OrderDetail>
  </div>
</template>

<script>
import OrderDetail from '../../components/Carts/OrderDetail'

export default {
  name: 'Cancel',
  components: {
    OrderDetail
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.order-status {
  height: 2.89rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(56, 56, 56, 1);
  background: #fff;
}
.tip {
  margin-left: 0.2rem;
}
p:nth-of-type(1) {
  font-size: 0.36rem;
  font-weight: bold;
}
p:nth-of-type(2) {
  font-size: 0.24rem;
  margin: 0.12rem 0 0.27rem 0;
}
.time {
  color: rgba(144, 192, 239, 1);
  font-size: 0.24rem;
}
.btn {
  color: rgba(56, 56, 56, 1);
  box-shadow: rgba(217, 217, 217, 1) solid 2px;
  border-radius: 7px;
  font-size: 0.22rem;
  line-height: 0.64rem;
  text-align: center;
  font-weight: bold;
  margin: 0 0.1rem;
}
</style>
