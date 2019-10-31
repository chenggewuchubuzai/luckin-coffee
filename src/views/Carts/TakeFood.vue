<template>
  <div class="TakeFood">
    <van-nav-bar title="取餐码" left-text="返回首页" left-arrow @click-left="onClickLeft" />
    <div class="box">
      <div class="head">
        <p class="code">取餐码：<span>432</span></p>
        <p class="hint">piu先生，请扫码取餐</p>
      </div>
      <div>
        <img src="../../assets/code.png" alt="" />
      </div>
      <van-button class="btn" plain hairline type="info" style="width:3.02rem;height:0.59rem">分享给好友</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakeFood',
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 7.9rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  padding: 1.4rem 0 0.78rem 0;
  box-sizing: border-box;
}
img {
  width: 3.1rem;
  height: 3.1rem;
}
.head {
  width: 2.65rem;
  text-align: center;
}
.code {
  font-size: 0.36rem;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
}
.code span {
  color: rgba(136, 175, 213, 1);
  font-size: 0.32rem;
}
.hint {
  color: rgba(56, 56, 56, 1);
  font-size: 0.26rem;
}
.btn {
  margin: 0 auto;
  text-align: center;
  line-height: 0.59rem;
}
</style>
