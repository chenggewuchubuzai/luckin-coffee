<template>
  <div class="zhanghu">
    <div class="first">
      <van-nav-bar title="账户余额" right-text="余额明细" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="two">
      <p>总余额{{ sss }}</p>
    </div>
    <div class="ke">
      <div class="k-left">
        <p>{{ sss }}</p>
        <p>可用余额（元）</p>
      </div>
      <div class="k-right">
        <p></p>
        <p>冻结余额（元）</p>
      </div>
    </div>
    <van-button type="info" @click="erweima" style="width:6.9rem;margin:0 auto">进行冲值</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sss: this.$route.query.t
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    erweima() {
      this.$router.push('/coffer/erweima')
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
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.38rem;
}
.san {
  height: 1rem;
}
.ke {
  display: flex;
  margin-bottom: 1rem;
}
.k-left {
  height: 1rem;
  width: 50%;
  line-height: 1rem;
  background: lightgreen;
  border-right: 1px solid #ccc;
  text-align: center;
  font-size: 0.25rem;
}
.k-right {
  height: 1rem;
  line-height: 1rem;
  width: 50%;
  background: aquamarine;
  text-align: center;
  font-size: 0.25rem;
}
</style>
