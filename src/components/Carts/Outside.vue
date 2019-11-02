<template>
  <div>
    <div class="delivery">
      <van-switch v-model="checked" @input="change()" size="large" /><span class="outside">外送</span>
      <div class="right">
        <p><van-tag class="tag" plain size="mini" type="primary">慢必赔</van-tag>立即配送</p>
        <p class="time">约<span>14:52</span>送达</p>
      </div>
    </div>
    <div class="orderInfo">
      <div class="addressInfo" @click="goAddress()">
        <div class="address">
          <p>配送信息</p>
          <p><img src="../../assets/icon1.svg" alt="" />北京时朝阳区青年汇佳园10号楼102...</p>
          <p><img src="../../assets/icon2.svg" alt="" />134******5789</p>
        </div>
        <img src="../../assets/jt.svg" alt="" />
      </div>
      <div class="info">
        <p>订单信息</p>
        <div class="detail" v-for="(i, index) in buyArr" :key="index">
          <div class="product">
            <p>{{ i.product.name }}</p>
            <p>大/单份糖/单份奶/热</p>
          </div>
          <span class="num">x{{ i.quantity }}</span>
          <span class="price">￥{{ i.product.price }}</span>
        </div>
        <div class="delivery-cost">
          <span>配送费</span>
          <span class="price">￥6</span>
        </div>
      </div>
      <div class="total">
        合计：<span>￥{{ zy }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Outside',
  data() {
    return {
      checked: true
    }
  },
  computed: {
    ...mapState('cartsProducts', ['total', 'buyArr', 'zy'])
  },
  methods: {
    goAddress() {
      this.$router.push({ name: 'Delivery' })
    },
    ...mapMutations('isDelivery', ['change'])
  }
}
</script>

<style scoped>
.delivery {
  border-top: 1px solid #ccc;
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  align-items: center;
  background: #fff;
}
.outside {
  margin-left: -2.9rem;
  font-size: 0.28rem;
  font-weight: bold;
}
.right {
  text-align: right;
  font-size: 0.26rem;
  color: rgba(56, 56, 56, 1);
  font-weight: bold;
}
.tag {
  margin-right: 0.1rem;
}
.time {
  color: rgba(128, 128, 128, 1);
  font-weight: normal;
}
.time span {
  font-size: 0.4rem;
  color: rgba(136, 175, 213, 1);
}
.orderInfo {
  /* height: 5.59rem; */
  min-height: 5.59rem;
  margin: 0.2rem 0;
  background: #fff;
}
.addressInfo {
  display: flex;
  justify-content: space-between;
  /* height: 1.4rem; */
  width: 6.9rem;
  color: rgba(56, 56, 56, 1);
  padding: 0.16rem 0.3rem 0.1rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
img {
  width: 0.28rem;
}
.address p:nth-of-type(1),
.info > p {
  font-size: 0.26rem;
  font-weight: bold;
  margin-bottom: 0.16rem;
}
.address p:nth-of-type(2) {
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}
.address p:nth-of-type(3) {
  font-size: 0.24rem;
}
.address img {
  margin-top: -0.1rem;
  margin-right: 0.1rem;
}
.info {
  padding: 0.26rem 0.3rem;
  color: rgba(56, 56, 56, 1);
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem 0;
}
.product > p:nth-of-type(1) {
  font-size: 0.28rem;
  font-weight: bold;
}
.price {
  font-weight: bold;
}
.delivery-cost {
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  align-items: center;
}
.delivery-cost span:nth-of-type(1) {
  font-size: 0.28rem;
  color: rgba(56, 56, 56, 1);
}
.total {
  height: 0.98rem;
  text-align: right;
  line-height: 0.98rem;
  padding-right: 0.3rem;
}
.total span {
  font-weight: bold;
  font-size: 0.32rem;
}
</style>
