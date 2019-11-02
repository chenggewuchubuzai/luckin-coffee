<template>
  <div class="app">
    <!-- <p>修改{{$route.params.id}}</p>
    <p>{{ zhanshi.receiver}}</p>-->

    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft" />

    <!-- <div v-for="item in list" :key="item._id"> -->
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
    <van-field label="门牌号" placeholder="请输入门牌号" />

    <!-- <input type="checkbox" v-model="idDefault" />默认 -->
    <!-- <div class="foot">
      <label>标签</label>
      <van-tag type="success">家</van-tag>
      <van-tag type="danger">公司</van-tag>
      <van-tag type="warning">学校</van-tag>
    </div>-->
    <!-- </div> -->

    <van-button type="primary" class="btn" @click="btns">修改成功</van-button>
  </div>
</template>
<script>
import { updateAddress, address } from '../../api/address'
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
  async created() {
    let ress = await address(this.$route.params.id)
    console.log(ress.data)
    console.log(ress.data.receiver)
    this.receiver = ress.data.receiver
    this.regions = ress.data.regions
    this.mobile = ress.data.mobile
  },
  methods: {
    onClickLeft() {
      this.$router.push('/delivery')
    },
    async btns() {
      const edit = {
        receiver: this.receiver,
        mobile: this.mobile,
        regions: this.regions,
        address: this.addAddress,
        idDefault: this.idDefault
      }
      let edits = await updateAddress(this.$route.params.id, edit)
      console.log(this.$route.params.id)
      console.log(edits)

      // this.$router.push('/delivery')
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