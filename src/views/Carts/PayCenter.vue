<template>
  <div class="payCenter">
    <van-nav-bar title="支付中心" left-arrow @click-left="onClickLeft" />
    <p>请在<span class="time">4分32秒</span>内完成支付，过时订单将会取消。</p>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <img class="way1" src="../../assets/weixin.svg" alt="" />
        <van-cell
          title="微信支付"
          style="height:1.2rem;line-height:0.8rem;padding-left:1rem"
          clickable
          @click="radio = '1'"
        >
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <img class="way2" src="../../assets/apply.svg" alt="" />
        <van-cell
          title="支付宝支付"
          style="height:1.2rem;line-height:0.8rem;padding-left:1rem"
          clickable
          @click="radio = '2'"
        >
          <van-radio slot="right-icon" name="2" />
        </van-cell>
        <img class="way3" src="../../assets/yinlian.svg" alt="" />
        <van-cell
          title="银联在线支付"
          style="height:1.2rem;line-height:0.8rem;padding-left:1rem"
          clickable
          @click="radio = '3'"
        >
          <van-radio slot="right-icon" name="3" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-checkbox
      class="agree"
      v-model="checked"
      shape="square"
      checked-color="rgba(136, 175, 213, 1)"
      icon-size="0.3rem"
      >我已阅读并同意<router-link :to="{ name: 'Carts' }" style="color:rgba(85, 122, 157, 1)"
        >《支付协议》</router-link
      ></van-checkbox
    >
    <van-button style="width:6.9rem;height:0.8rem;margin:0 0.3rem" color="rgba(144, 192, 239, 1)" :to="{ name: 'Pay' }"
      >确认支付</van-button
    >
  </div>
</template>

<script>
export default {
  name: 'PayCenter',
  data() {
    return {
      radio: '1',
      checked: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
p {
  width: 5.46rem;
  height: 0.38rem;
  margin: 0 auto;
  font-size: 0.26rem;
}
.time {
  color: rgba(144, 192, 239, 1);
  font-size: 0.26rem;
}
img {
  width: 0.5rem;
  height: 0.5rem;
  z-index: 1000;
  position: absolute;
  margin-left: 0.2rem;
}
.way1 {
  top: 0.4rem;
}
.way2 {
  top: 1.6rem;
}
.way3 {
  top: 2.8rem;
}
.agree {
  margin: 0.3rem 0 0.3rem 0.3rem;
}
</style>
