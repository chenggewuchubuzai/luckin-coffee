<template>
  <div class="app">
    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft" />

    <van-field
      required
      clearable
      label="姓名"
      right-icon="question-o"
      placeholder="请输入用户名"
      v-model="receiver"
    />
    <van-radio-group v-model="radio" class="radio">
      <label>性别</label>
      <van-radio name="1">先生</van-radio>
      <van-radio name="2">女士</van-radio>
    </van-radio-group>
    <van-field label="手机号" placeholder="请输入手机号" v-model="mobile" />
    <van-field label="地址" placeholder="请输入你的地址" v-model="regions" />
    <van-field label="门牌号" placeholder="请输入门牌号" v-model="address" />
    <input type="checkbox" v-model="idDefault" />默认
    <div class="foot">
      <label>标签</label>
      <van-tag type="success">家</van-tag>
      <van-tag type="danger">公司</van-tag>
      <van-tag type="warning">学校</van-tag>
    </div>

    <van-button type="primary" class="btn" @click="btns">保存</van-button>
  </div>
</template>
<script>
import { addAddress } from '../../api/address'
export default {
  data() {
    return {
      radio: '1',
      receiver: '',
      mobile: '',
      regions: '',
      address: '',
      idDefault: ''
    }
  },
  methods: {
    async btns() {
      const adress = {
        receiver: this.receiver,
        mobile: this.mobile,
        regions: this.regions,
        address: this.addAddress,
        idDefault: this.idDefault
      }
      let res = await addAddress(adress)
      console.log(res)
      this.$router.push('/delivery')
    },
    onClickLeft() {
      this.$router.push('/confirm')
    }
  }
}
</script>
<style scoped>
html,
body,
.app {
  height: 100%;
  width: 100%;
}
.app {
  display: flex;
  flex-direction: column;
}
.radio {
  display: flex;
  height: 1rem;
  background: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
}
.foot {
  display: flex;
  justify-content: space-around;
}
.btn {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>