<template>
  <div class="app">
    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft" />
    <section>
      <van-field clearable label="姓名" right-icon="question-o" placeholder="请输入用户名" v-model="receiver" />
      <van-radio-group v-model="radio" class="radio">
        <label>性别</label>
        <van-radio name="1" class="man">先生</van-radio>
        <van-radio name="2" class="woman">女士</van-radio>
      </van-radio-group>
      <van-field label="手机号" placeholder="请输入手机号" v-model="mobile" />
      <van-field label="地址" placeholder="请输入你的地址" v-model="regions" />
      <van-field label="门牌号" placeholder="请输入门牌号" />
      <van-button
        class="btn"
        type="info"
        style="width:6.9rem;height:0.8rem;margin:0.3rem 0.3rem;"
        @click="change()"
        color="rgba(144, 192, 239, 1)"
        >修改</van-button
      >
    </section>
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
    async change() {
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
      this.$router.push('/delivery')
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
section {
  margin-top: 0.2rem;
}
.radio {
  display: flex;
  height: 1rem;
  background: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
}
.radio .man {
  margin: 0 0.5rem;
}
.radio label {
  margin-left: 0.3rem;
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
