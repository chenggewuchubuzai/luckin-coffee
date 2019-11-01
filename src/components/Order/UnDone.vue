<template>
  <div>
    <ul>
      <li v-for="(item, index) in unfinishedList" :key="index">
        <p class="head">
          <span>外卖订单：{{ item.no }}</span
          ><span>待付款</span>
        </p>
        <div class="detail">
          <p class="address">
            <span>{{ item.address }}</span
            ><span>{{ item.createdAt }}</span>
          </p>
          <p class="product">榛果拿铁等 共件商品</p>
        </div>
        <p class="price">
          <span>￥{{ item.price }}</span
          ><van-tag plain size="large" type="warning" @click="toPay()">去支付</van-tag>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UnDone',
  computed: {
    ...mapState('order', ['unfinishedList'])
  },
  methods: {
    toPay() {
      this.$router.push({
        name: 'Pay'
      })
    }
  }
}
</script>

<style scoped>
li {
  height: 3.2rem;
  margin: 0.2rem 0;
  box-sizing: border-box;
  padding: 0.24rem 0.3rem 0.28rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
}
.head {
  font-size: 0.26rem;
  color: rgba(166, 166, 166, 1);
  display: flex;
  justify-content: space-between;
}
.head span:nth-of-type(2) {
  color: rgba(136, 175, 213, 1);
}
.address {
  color: rgba(56, 56, 56, 1);
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.address span:nth-of-type(2) {
  color: rgba(166, 166, 166, 1);
  font-size: 0.24rem;
}
.product {
  color: rgba(80, 80, 80, 1);
  font-size: 0.26rem;
}
.price {
  display: flex;
  justify-content: space-between;
}
.price span:nth-of-type(1) {
  color: rgba(56, 56, 56, 1);
  font-size: 0.28rem;
  font-weight: bold;
}
.again {
  margin-left: 3.3rem;
}
</style>
