<template>
  <div class="coffer">
    <div class="a">
      <van-nav-bar
        title="咖啡钱包"
        left-text
        right-text="查看无效卷"
        left-arrow
        class="nav"
        @click-left="onClickLeft"
      />
    </div>
    <div class="b">
      <p>
        <img src="../../assets/tu.jpg" alt class="tu" />
      </p>
      <p class="laji">
        <img src="../../assets/laji 160.png" alt />
      </p>
    </div>
    <div class="btn">
      <van-button plain type="primary" @click="happy">幸运送</van-button>
      <van-button plain type="primary" @click="happy">发红包</van-button>
      <van-button type="info" info="1" @click="cofferchong">充值钱包</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    happy() {
      this.$dialog.alert({
        message: '此功能暂未开发'
      })
    },
    cofferchong() {
      this.$router.push('/cofferchong')
    }
  }
}
</script>
<style scoped>
heml,
body,
.coffer {
  height: 100%;
  width: 100%;
}
.coffer {
  display: flex;
  flex-direction: column;
}

.b {
  background: yellow;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav {
  color: black;
}
.van-nav-bar__text {
  color: black;
}
.van-icon-arrow-left {
  color: black;
}
.tu {
  height: 2rem;
  width: 100%;
}
.laji {
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.laji img {
  height: 2rem;
  width: 1rem;
}
.btn {
  display: flex;
  justify-content: space-around;
  height: 1rem;
  padding-top: 0.3rem;
  box-shadow: 0px 0px 1px 3px #ccc;
}
.van-button {
  width: 2rem;
}
</style>