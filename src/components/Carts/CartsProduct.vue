<template>
  <div class="product">
    <ul>
      <van-checkbox-group v-model="result">
        <li v-for="item in cartsList" :key="item._id">
          <div class="left">
            <van-checkbox
              :name="item._id"
              ref="sel"
              @click="selHandle(item, item.product._id)"
              checked-color="rgba(136, 175, 213, 1)"
            />
            <div>
              <div class="title">
                <h2>{{ item.product.name }}</h2>
                <van-tag type="warning" size="mini" class="tip">充2赠1</van-tag>
              </div>
            </div>
          </div>
          <div class="right">
            <span class="price">￥{{ item.product.price }}</span>
            <van-stepper
              v-model="item.quantity"
              input-width="20px"
              button-size="20px"
              @plus="addHandle(item, item.product._id)"
              @minus="subHandle(item, item.product._id)"
            />
            <i @click="delHandle(item, item._id)" class="el-icon-delete"></i>
          </div></li
      ></van-checkbox-group>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { addToCarts, delCartsProduct } from '../../api/product'

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
    ...mapMutations('cartsProducts', ['addCount', 'subCount', 'addOne', 'subOne']),
    ...mapActions('cartsProducts', ['loadCartData']),
    selHandle() {
      this.addCount(this.cartsList)
    },
    async addHandle(item, id) {
      const result = await addToCarts(id)
      this.loadCartData()
      this.addOne(item)
    },
    async subHandle(item, id) {
      const result = await addToCarts(id, -1)
      this.loadCartData()
      this.subOne(item)
    },
    async delHandle(item, id) {
      const result = await delCartsProduct(id)
      // console.log(result)
      this.loadCartData()
      this.subCount(item)
    }
  }
}
</script>

<style scoped>
li {
  height: 1.6rem;
  display: flex;
  background: #fff;
  justify-content: space-between;
  padding: 0 0.2rem;
  align-items: center;
  margin-bottom: 1px;
}
.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 3.8rem;
}
.title {
  display: flex;
  align-items: center;
}
h2 {
  font-size: 0.24rem;
  color: rgba(56, 56, 56, 1);
  margin-left: 0.2rem;
}
.tip {
  margin-left: 0.1rem;
}
.price {
  font-size: 0.3rem;
  margin-left: 0.78rem;
  margin-right: 0.1rem;
}
.right {
  width: 3.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
