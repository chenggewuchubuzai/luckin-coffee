<template>
  <div class="product">
    <ul>
      <van-checkbox-group v-model="result">
        <li v-for="item in cartsList" :key="item._id" @click="del(item._id)">
          <van-checkbox :name="item" checked-color="rgba(136, 175, 213, 1)" />
          <div>
            <div class="title">
              <h2>{{ item.product.name }}</h2>
              <van-tag type="warning" size="mini" class="tip">充2赠1</van-tag>
            </div>
            <p>{{ item.content }}</p>
          </div>
          <span class="price">￥{{ item.product.price }}</span>
          <van-stepper v-model="item.num" input-width="20px" button-size="20px" color="red" /></li
      ></van-checkbox-group>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { delCartsProduct } from '../../api/product'

export default {
  name: 'CartsProduct',
  data() {
    return {
      checked: 'true',
      result: []
    }
  },
  computed: {
    ...mapState('cartsProducts', ['cartsList'])
  },
  methods: {
    ...mapActions('cartsProducts', ['loadCartData']),
    async del(id) {
      const result = await delCartsProduct(id)
      console.log(result)
      this.loadCartData()
    }
  }
}
</script>

<style scoped>
li {
  height: 1.6rem;
  display: flex;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1px;
}
.title {
  display: flex;
  align-items: center;
}
h2 {
  font-size: 0.3rem;
  color: rgba(56, 56, 56, 1);
}
.tip {
  margin-left: 0.2rem;
}
.price {
  font-size: 0.36rem;
  margin-left: 1rem;
}
</style>
