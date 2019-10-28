<template>
  <div class="zhanghu">
    <div class="first">
      <van-nav-bar title="账户余额" right-text="余额明细" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="two">
      <h1>0</h1>
      <p>总余额</p>
    </div>
    <div class="ke">
      <div class="k-left">
        <p>0</p>
        <p>可用余额（元）</p>
      </div>
      <div class="k-right">
        <p>0</p>
        <p>冻结余额（元）</p>
      </div>
    </div>
    <van-button type="info">进行冲值</van-button>
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
.zhanghu {
  height: 100%;
  width: 100%;
}
.zhanghu {
  display: flex;
  flex-direction: column;
}
.first {
  height: 0.8rem;
}
.two {
  height: 3rem;
  background: yellowgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.3rem;
}
.san {
  height: 1rem;
}
.ke {
  display: flex;
}
.k-left {
  height: 1rem;
  width: 50%;
  background: blanchedalmond;
  border-right: 1px solid #ccc;
  text-align: center;
  font-size: 0.25rem;
}
.k-right {
  height: 1rem;
  width: 50%;
  background: blanchedalmond;
  text-align: center;
  font-size: 0.25rem;
}
</style>