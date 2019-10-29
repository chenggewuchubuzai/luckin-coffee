<template>
  <div class="login">
    <div class="log">
      <img src="../../assets/log.png" alt="" />
    </div>
    <van-cell-group class="main">
      <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请设置密码" />
    </van-cell-group>
    <van-button class="regBtn" type="primary" @click="regHandle()">注册</van-button>
  </div>
</template>

<script>
import { register } from '../../api/user'
import { Dialog } from 'vant'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async regHandle() {
      const user = { userName: this.username, password: this.password }
      const result = await register(user)
      // console.log(result.data.code)
      if (result.data.code === 'success') {
        Dialog.alert({
          message: '注册成功'
        })
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style scoped>
.log {
  width: 1.6rem;
  height: 1.88rem;
  margin: 1.8rem auto 0;
}
.log img {
  width: 1.6rem;
  height: 1.88rem;
}
.main {
  width: 6.9rem;
  margin: 1.3rem auto 0.8rem;
}
.regBtn {
  width: 6.9rem;
  margin-left: 0.28rem;
  font-size: 0.36rem;
}
</style>
