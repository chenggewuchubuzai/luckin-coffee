<template>
  <div class="shouhuo">
    <van-nav-bar title="我的地址" left-arrow @click-left="onClickLeft" class="a" />
    <div class="b">2</div>
    <van-button type="primary" @click="address">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    address() {
      this.$router.push('/three/myadress')
    }
  }
}
</script>
<style scoped>
html,
body,
.shouhuo {
  height: 100%;
  width: 100%;
}
.shouhuo {
  display: flex;
  flex-direction: column;
}
.a {
  height: 1rem;
}
.b {
  background: bisque;
  flex: 1;
}
.c {
  height: 1rem;
  background: red;
}
</style>