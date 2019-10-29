<template>
  <div class="login">
    <div class="log">
      <img src="../../assets/log.png" alt="" />
    </div>
    <van-cell-group class="main">
      <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button class="loginBtn" type="primary" @click="loginHandle()">登录</van-button>
    <p><router-link :to="{ name: 'Register' }">注册新用户</router-link></p>
  </div>
</template>

<script>
import login from '../../api/user'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginHandle() {
      const user = { username: this.username, password: this.password }
      const result = await login({ ...user })
      console.log(result.res)
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
.loginBtn {
  width: 6.9rem;
  margin-left: 0.28rem;
  font-size: 0.36rem;
}
p {
  font-size: 0.25rem;
  margin-top: 0.15rem;
  margin-left: 5.8rem;
  cursor: pointer;
}
</style>
