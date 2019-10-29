<template>
  <div class="footer">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }">首页</van-tabbar-item>
      <van-tabbar-item icon="hot-o" :to="{ name: 'Menu' }">菜单</van-tabbar-item>
      <van-tabbar-item icon="orders-o" :to="{ name: 'Order' }">订单</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Carts' }" :info="cartsList.length">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="{ name: 'User' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState('cartsProducts', ['cartsList'])
  }
}
</script>

<style scoped>
.footer {
  height: 1rem;
}
.van-tabbar {
  height: 1rem;
}
</style>
