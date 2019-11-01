<template>
  <div class="app">
    <van-nav-bar title="门店自取" right-text="北京" left-arrow />

    <div class="a">
      <p>
        <span>我的收货地址</span>
        <span>管理我的收获地址</span>
      </p>
      <div>
        <p>北京市水陆大会出生时的</p>
        <van-tag type="primary">标签</van-tag>
      </div>
    </div>
    <van-button type="info">+添加按钮</van-button>
  </div>
</template>
<style scoped>
html,
body,
.app {
  height: 100%;
  width: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.a {
  flex: 1;
  overflow: auto;
}
.a p {
  display: flex;
  height: 0.7rem;
  justify-content: space-between;
  margin: 0 0.2rem;
  font-size: 0.25rem;
  color: aquamarine;
}
</style>