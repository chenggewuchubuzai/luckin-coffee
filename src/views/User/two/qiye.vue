<template>
  <div>
    <van-nav-bar title="可用优惠劵" left-arrow @click-left="onClickLeft" />
    <div class="first">
      <div class="top">
        <div class="left">
          <h3>免费指定饮品劵</h3>
          <p>有效期止2020-10-22</p>
        </div>
        <div class="right">0.0</div>
      </div>
      <div class="bottom">
        <p class="a">使用规则</p>
        <p class="b">立即使用</p>
      </div>
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
.first {
  width: 7rem;
  height: 2.5rem;
  background: #fff;
  margin: 0.3rem;
}
.top {
  width: 7.5rem;
  overflow: hidden;
}
.left {
  width: 3rem;
  float: left;
  font-size: 0.3rem;
  margin-top: 0.2rem;
}
.left p {
  font-size: 0.13rem;
  color: gray;
  margin-top: 0.2rem;
}
.right {
  width: 2rem;
  float: right;
  font-size: 0.8rem;
  color: rgba(144, 192, 239, 1);
}
.bottom {
  height: 0.8rem;
  border-top: 1px dashed #ccc;
  width: 7rem;
  font-size: 0.3rem;
}
.a {
  font-size: 0.2rem;
  background: rgba(144, 192, 239, 1);
  float: right;
  width: 2rem;
  border-radius: 46%;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  margin-right: 0.5rem;
  font-size: 0.2rem;
  color: #fff;
}
.b {
  font-size: 0.2rem;

  float: left;
  width: 1rem;
}
</style>