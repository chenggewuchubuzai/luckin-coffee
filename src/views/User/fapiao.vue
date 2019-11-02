<template>
  <div class="fapiao">
    <van-nav-bar title="发票管理" right-text="发票说明" left-arrow @click-left="onClickLeft" />
    <class class="b">
      <ul>
        <router-link :to="{ name: 'Dingdan' }">
          <li>
            <span>按订单开票</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>

          <li>
            <span>咖啡钱包购买开票</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>
          <li>
            <span>礼品卡购买开票</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>
          <li class="chong">
            <span>充值开票</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>
          <li>
            <span>发票记录</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>
          <li>
            <span>发票抬头</span>
            <img src="../../assets/jiantou.svg" alt />
          </li>
        </router-link>
      </ul>
    </class>
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
.fapiao {
  height: 100%;
  width: 100%;
}
.fapiao {
  display: flex;
  flex-direction: column;
}
.b {
  flex: 1;
}
.c {
  height: 1rem;
}
ul {
  height: 6.5rem;
  margin-top: 0.1rem;
}
li {
  height: 1.1rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  font-size: 0.26rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3rem;
  padding-right: 0.2rem;
  background: #fff;
}
img {
  height: 0.3rem;
  width: 0.3rem;
}
.chong {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.1);
}
</style>
