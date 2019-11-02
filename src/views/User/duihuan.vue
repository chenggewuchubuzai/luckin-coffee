<template>
  <div class="dui">
    <van-nav-bar title="优惠兑换" id="top" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <section>
      <div class="b">
        <label>兑换码</label>
        <input type="text" placeholder="请输入兑换码" class="huan" />
      </div>
      <van-button type="info" class="btn">兑换</van-button>
    </section>
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
html,
body,
section {
  margin-top: 1.6rem;
}
.b {
  height: 1rem;
  width: 6.9rem;
  margin: 0 auto;
}
label {
  height: 1rem;
  text-align: center;
  font-size: 0.4rem;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
}
.huan {
  outline: none;
  height: 0.8rem;
  width: 70%;
  font-size: 0.35rem;
  border: 0;
}
.c {
  height: 1rem;
}
.btn {
  width: 80%;
  margin-left: 0.7rem;
  margin-top: 0.6rem;
}
</style>
