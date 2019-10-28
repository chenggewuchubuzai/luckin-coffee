<template>
  <div>
    <van-nav-bar title="按订单开票" left-arrow @click-left="onClickLeft" />
    <div class="contern">
      <img src="../../../assets/laji 160.png" alt />
      <p>目前作暂无开发</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.van-nav-bar {
  box-shadow: 3px 3px 3px #ccc;
}
img {
  height: 200px;
  width: 100px;
}
.contern {
  margin: 3rem;
}
p {
  width: 100%;
}
</style>