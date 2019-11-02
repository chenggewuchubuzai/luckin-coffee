<template>
  <div class="yonghu">
    <van-nav-bar title="用户名" left-arrow @click-left="onClickLeft" />
    <div class="er">
      <label>用户名</label>
      <input type="text" placeholder="输入用户名" v-model="value" />
    </div>
    <van-button
      class="btn"
      type="info"
      style="width:6.9rem;height:0.8rem;margin:0.6rem 0.3rem;"
      @click="
        $router.push({
          name: 'Geren',
          query: {
            t: value
          }
        })
      "
      color="rgba(144, 192, 239, 1)"
      >确定</van-button
    >
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
  margin-left: 0.9rem;
  margin-right: 0.6rem;
  margin-top: 0.3;
}
input {
  border: 0;
  outline: none;
  height: 0.7rem;
  width: 4rem;
  font-size: 0.3rem;
  text-align: center;
}
.btn {
  width: 6rem;
  margin-left: 0.5rem;
}
</style>
