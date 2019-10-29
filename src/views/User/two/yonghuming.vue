<template>
  <div class="yonghu">
    <van-nav-bar title="用户名" left-arrow @click-left="onClickLeft" />
    <div class="er">
      <label>用户名</label>
      <input type="text" placeholder="输入用户名" v-model="value" />
    </div>
    <van-button
      type="info"
      class="btn"
      @click="$router.push({name:'Geren',query:{
        t:value
    }})"
    >确定</van-button>
  </div>
</template>
<script>
export default {
  name: 'yonghuming',
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
.er {
  height: 1rem;
  width: 100%;
  margin-top: 0.5rem;
}
label {
  font-size: 0.35rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 0.3;
}
input {
  border: 0;
  outline: none;
  height: 1rem;
  width: 5rem;
}
.btn {
  width: 6rem;
  margin-left: 0.5rem;
}
</style>