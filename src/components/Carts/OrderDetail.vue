<template>
  <div class="orderDetail">
    <div class="info">
      <ul>
        <li>
          <span>外卖订单:33412823848583</span>
          <span>{{ date }}</span>
        </li>
        <li v-for="(i, index) in buyArr" :key="index">
          <div class="product">
            <p class="product-name">{{ i.name ? i.name : i.product.name }}</p>
            <p class="tip">大/单份糖/单份奶/热</p>
          </div>
          <span class="num">x{{ i.quantity }}</span>
          <span class="price">￥{{ i.price ? i.price : i.product.price }}</span>
        </li>
        <li v-if="isOutside">
          <span>配送费</span>
          <span class="price">￥6</span>
        </li>
        <li>
          <span>使用咖啡钱包</span>
          <span class="price"></span>
        </li>
        <li>
          <p>共{{ buyArr.length }}件商品</p>
          <p>
            实付<span class="price">￥{{ isOutside ? total + 6 : total }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="address">
      <p>
        <span>收货地址</span
        ><span>{{ Address.regions ? Address.regions : '朝阳区朝阳北路青年汇102号楼一层123室' }}</span>
      </p>
      <p>
        <span class="name">{{ Address.receiver }}</span
        ><span class="tel">{{ Address.mobile }}</span>
      </p>
    </div>
    <div class="banner">
      <img src="../../assets/banner.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { address } from '../../api/address.js'

export default {
  data() {
    return {
      Address: {}
    }
  },
  name: 'OrderDetail',
  computed: {
    ...mapState('cartsProducts', ['buyArr', 'total', 'date']),
    ...mapState('isDelivery', ['isOutside'])
  },
  created() {
    console.log(this.buyArr)
  },
  async created() {
    // console.log(this.buyArr)
    if (this.$route.params.id) {
      let result = await address(this.$route.params.id)
      this.Address = result.data
      console.log(this.Address)
    }
  }
}
</script>

<style scoped>
.info {
  min-height: 2rem;
  background: #fff;
  margin-top: 0.21rem;
}
li {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  align-items: center;
  border-bottom: 1px solid rgba(166, 166, 166, 0.1);
}
li:nth-of-type(1),
.tip {
  height: 0.8rem;
  color: rgba(128, 128, 128, 1);
}
li:nth-of-type(2) {
  border-bottom: none;
  height: 0.8rem;
}
li:nth-last-child(1) {
  color: rgba(56, 56, 56, 1);
}
.product-name {
  color: rgba(56, 56, 56, 1);
  font-size: 0.28rem;
  font-weight: bold;
}
.price {
  font-weight: bold;
  font-size: 0.28rem;
}
.address {
  height: 1.4rem;
  margin: 0.2rem 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.28rem;
  color: rgba(80, 80, 80, 1);
}
.address p {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.name {
  margin-left: 4rem;
}
.banner,
img {
  height: 1.2rem;
}
</style>
