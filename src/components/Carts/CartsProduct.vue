<template>
  <div class="product">
    <ul>
      <li v-for="item in cartsList" :key="item._id">
        <div class="left">
          <van-checkbox v-model="item.sel" @change="buy(item.sel, item)" checked-color="rgba(136, 175, 213, 1)" />
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
            @plus="addHandle(item.sel, item, item.product._id)"
            @minus="subHandle(item.sel, item, item.product._id)"
          />
          <i @click="delHandle(item.sel, item, item._id)" class="el-icon-delete"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { addToCarts, delCartsProduct } from '../../api/product'
import { login } from '../../api/user'

export default {
  name: 'CartsProduct',
  data() {
    return {
      buyArr: []
    }
  },
  computed: {
    ...mapState('cartsProducts', ['cartsList'])
  },
  methods: {
    ...mapMutations('cartsProducts', ['count', 'addOne', 'subOne']),
    ...mapActions('cartsProducts', ['loadCartData']),
    buy(checked, item) {
      if (checked) {
        this.buyArr.push(item)
      } else {
        this.buyArr.pop(item)
      }
      // console.log(this.buyArr)
      this.count(this.buyArr)
    },
    async addHandle(checked, item, id) {
      const result = await addToCarts(id)
      if (checked) {
        /*  console.log(checked)
        console.log(item) */
        this.addOne(item)
      }
      // this.loadCartData()
    },
    async subHandle(checked, item, id) {
      const result = await addToCarts(id, -1)
      // this.loadCartData()
      if (checked) {
        this.subOne(item)
      }
    },
    async delHandle(checked, item, id) {
      const result = await delCartsProduct(id)
      // console.log(result)
      var checked = false
      this.buy(checked, item)
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
