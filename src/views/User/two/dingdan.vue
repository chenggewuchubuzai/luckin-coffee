<template>
  <div>
    <van-nav-bar title="按订单开票" left-arrow @click-left="onClickLeft" />
    <div class="contern">
      <img src="../../../assets/laji 160.png" alt />
      <p>目前暂无开发</p>
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
img {
  height: 200px;
  width: 100px;
}
.contern {
  margin: 3rem;
}
p {
  width: 3rem;
  margin-left: 0.27rem;
}
</style>
