<template>
  <div class="pay">
    <van-nav-bar title="确认支付" left-text="取消" @click-left="onClickLeft" />
    <div class="payment">
      <div class="payInfo">
        <p>订单付款</p>
        <p>￥6.00</p>
      </div>
      <div class="payee">
        <span>收款方</span>
        <span>luckincoffee瑞幸咖啡</span>
      </div>
    </div>
    <van-button id="btn" :to="{ name: 'Succeed' }" style="width:7.1rem;height:0.92rem;" type="primary"
      >立即支付</van-button
    >
    <div class="bottom">支付安全由中国人民财产保险股份有限公司承保</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
 
export default {
  name: 'Pay',
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'Cancel'
      })
    }
  },
  computed: {
    ...mapState('cartsProducts','total','zy'),
    ...mapState('isDelivery','isOutside')
  },
}
</script>

<style scoped>
.pay {
  height: 100%;
  background: rgba(248, 248, 248, 1);
}
.payment {
  height: 3.13rem;
  background: #fff;
}
.payInfo {
  height: 2.11rem;
  border-bottom: 1px solid rgba(166, 166, 166, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.payInfo p:nth-of-type(1) {
  font-size: 0.36rem;
  font-weight: bold;
}
.payInfo p:nth-of-type(2) {
  font-size: 0.76rem;
  font-weight: bold;
}
.payee {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  color: rgba(128, 128, 128, 1);
  font-size: 0.28rem;
  padding: 0 0.3rem;
}
#btn {
  margin: 0.6rem 0.21rem 0 0.19rem;
}
.bottom {
  width: 5.04rem;
  height: 0.36rem;
  font-size: 0.24rem;
  color: rgba(166, 166, 166, 1);
  margin: 7.2rem auto 0;
}
</style>
