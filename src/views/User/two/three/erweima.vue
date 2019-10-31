<template>
  <div class="er">
    <van-nav-bar title="个人支付账号" left-arrow @click-left="onClickLeft" />
    <h2>请输入你的金额</h2>
    <input type="text" placeholder="请输入你的金额" v-model="value" />
    <van-button type="info" class="btn" @click="$router.push({name:'Zhanghu',query:{t:value}})">确定充值</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
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
input {
  margin-top: 0.5rem;
  height: 0.6rem;
  width: 80%;
  margin-left: 0.5rem;
}
.btn {
  width: 80%;
  margin: 0.5rem;
}
</style>