<template>
  <div class="dui">
    <div class="a">
      <van-row type="flex" justify="center" class="top">
        <van-col span="6" class>
          <img src="../../assets/jiantou.svg" alt class="jian" @click="duihuan()" />
        </van-col>
        <van-col span="6">兑换优惠</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <div class="b">
      <label>兑换码</label>
      <input type="text" placeholder="请输入兑换码" class="huan" />
    </div>

    <van-button type="info" class="btn">信息按钮</van-button>
  </div>
</template>
<script>
export default {
  methods: {
    duihuan() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
html,
body,
.dui {
  height: 100%;
  width: 100%;
}
.dui {
  display: flex;
  flex-direction: column;
}
.a {
  height: 1rem;
  background: yellowgreen;
}
.jian {
  width: 0.38rem;
  height: 0.38rem;
  margin-right: 0.3rem;
  font-size: 0.3rem;
}
.top {
  width: 100%;
  height: 1.1rem;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
}
.b {
  height: 1rem;
}
label {
  height: 1rem;
  text-align: center;
  font-size: 0.4rem;
}
.huan {
  outline: none;
  height: 1rem;
  width: 80%;
  font-size: 0.35rem;
  border: 0;
}
.c {
  height: 1rem;
}
.btn {
  width: 80%;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>