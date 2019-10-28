<template>
  <div class="carts">
    <h1>购物车</h1>
    <img class="banner" src="../../assets/carts_top.png" alt="" />
    <div class="section">
      <CartsProduct v-if="!isEmpty"></CartsProduct>
      <Empty v-if="isEmpty"></Empty>
      <RecommendProduct></RecommendProduct>
    </div>
    <div class="sum" v-if="!isEmpty">
      <div class="total">应付合计：<span class="price">￥21</span></div>
      <router-link :to="{ name: 'Confirm' }"><span class="toPay">去结算</span></router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import CartsProduct from '@/components/Carts/CartsProduct'
import RecommendProduct from '@/components/Carts/RecommendProduct'
import Empty from '@/components/Carts/Empty'
import { mapState } from 'vuex'

export default {
  name: 'Carts',
  components: {
    CartsProduct,
    RecommendProduct,
    Empty
  },
  data() {
    return {
      isEmpty: false
    }
  }
}
</script>

<style scoped>
h1 {
  width: 7.5rem;
  height: 0.88rem;
  top: 0.2rem;
  color: rgba(56, 56, 56, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 0.36rem;
  line-height: 0.88rem;
  text-align: center;
  font-weight: bold;
}
.banner {
  width: 7.5rem;
  height: 1.35rem;
  top: 0.64rem;
}
.carts {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.section {
  flex: 1;
  overflow: auto;
}
.sum {
  height: 1.2rem;
  display: flex;
  line-height: 1.2rem;
  background: #fff;
}
.total {
  width: 5.12rem;
  font-size: 0.28rem;
  margin-left: 0.3rem;
  font-weight: bold;
}
.price {
  font-size: 0.48rem;
  color: rgba(56, 56, 56, 1);
  font-weight: bold;
}
.toPay {
  display: block;
  width: 2.39rem;
  background: rgba(144, 192, 239, 1);
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
}
</style>
