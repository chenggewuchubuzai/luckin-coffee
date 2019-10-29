<template>
  <div class="app">
    <van-nav-bar title="充值咖啡钱包" right-text="更多优惠" left-arrow class="a" @click-left="onClickLeft" />

    <div class="b">
      <h3>购买以下的劵将享受优惠</h3>
      <div class="carts">
        <span>￥21</span>
        <span>B1全国通用</span>

        <van-stepper v-model="value1" />
      </div>
      <div class="carts">
        <span>￥25</span>
        <span>B1全国通用</span>

        <van-stepper v-model="value2" />
      </div>
      <div class="carts">
        <span>￥32</span>
        <span>B1全国通用</span>

        <van-stepper v-model="value3" />
      </div>
    </div>
    <div class="c">
      <div class="end">
        <p class="fu">应付合计￥{{addcount}}</p>

        <button class="shuan" @click="happy">去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  },
  computed: {
    addcount() {
      return this.value1 * 21 + this.value2 * 25 + this.value3 * 32
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    happy() {
      this.$dialog.alert({
        message: '不要难为人了，还的绑定银行账号，朕搞不了'
      })
    }
  }
}
</script>
<style scoped>
html,
body,
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.a {
  height: 1rem;
}
.b {
  background: pink;
  flex: 1;
}
.carts {
  display: flex;
  justify-content: space-around;
  height: 1rem;
  background: #fff;
  align-items: center;
  font-size: 0.3rem;
  margin-top: 0.5rem;
}

h3 {
  font-size: 0.4rem;
}
.end {
  height: 1rem;
  background: #fff;
}
.fu {
  width: 5rem;
  font-size: 0.5rem;
}
.end {
  height: 1rem;
  background: yellow;
  display: flex;
}
.shuan {
  width: 2rem;
  height: 1rem;
}
</style>