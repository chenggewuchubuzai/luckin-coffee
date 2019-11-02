<template>
  <div class="coupon">
    <van-nav-bar title="可用优惠劵" left-arrow @click-left="onClickLeft" />
    <section>
      <div class="first">
        <div class="top">
          <div class="left">
            <h3>免费指定饮品劵</h3>
            <p>有效期止2020-10-22</p>
          </div>
          <div class="right">6.6</div>
        </div>
        <div class="bottom">
          <p class="a">使用规则</p>
          <p class="b">立即使用</p>
        </div>
      </div>
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
.coupon {
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: auto;
}
.first {
  width: 7rem;
  height: 2.5rem;
  background: #fff;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
.top {
  width: 100%;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 0.2rem;
}
.left {
  width: 3rem;
  float: left;
  font-size: 0.3rem;
  margin-top: 0.2rem;
}
.left p {
  font-size: 0.23rem;
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
  width: 6rem;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.a {
  font-size: 0.2rem;
  background: rgba(144, 192, 239, 1);
  width: 2rem;
  border-radius: 46%;
  height: 0.7rem;
  text-align: center;
  margin-top: 0.22rem;
  line-height: 0.7rem;
  font-size: 0.2rem;
  color: #fff;
  margin-right: 0.3rem;
}
.b {
  font-size: 0.32rem;
}
</style>
