<template>
  <div>
    <ul>
      <li v-for="(item, index) in succeedList" :key="index">
        <p class="head">
          <span>外卖订单：{{ item.no }}</span
          ><span style="color:rgba(166, 166, 166, 1)">已完成</span>
        </p>
        <div class="detail">
          <p class="address">
            <span>{{ item.regions }}</span
            ><span>{{ item.createdAt }}</span>
          </p>
          <p class="product">
            收货人：<span>{{ item.receiver }}</span>
          </p>
        </div>
        <p class="price">
          <span>￥{{ item.price }}</span
          ><van-tag plain size="large" class="delOrder" @click="delOrderHandle(item._id)">删除订单</van-tag>
          <van-tag plain class="again" size="large" @click="again()">再来一单</van-tag
          ><van-tag plain size="large" type="warning" color="rgba(144, 192, 239, 1)" @click="evaluate()"
            >去评价</van-tag
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { delOrder } from '../../api/order'

export default {
  name: 'Done',
  computed: {
    ...mapState('order', ['succeedList'])
  },
  methods: {
    ...mapActions('order', ['loadOrderData']),
    again() {
      this.$router.push({
        name: 'Menu'
      })
    },
    evaluate() {
      this.$router.push({
        name: 'Evaluate'
      })
    },
    async delOrderHandle(id) {
      // console.log(id)
      const result = await delOrder(id)
      console.log(result)
      this.loadOrderData()
    }
  }
}
</script>

<style scoped>
li {
  height: 3.2rem;
  margin: 0.2rem 0;
  box-sizing: border-box;
  padding: 0.24rem 0.3rem 0.28rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
}
.head {
  font-size: 0.26rem;
  color: rgba(166, 166, 166, 1);
  display: flex;
  justify-content: space-between;
}
.head span:nth-of-type(2) {
  color: rgba(136, 175, 213, 1);
}
.address {
  color: rgba(56, 56, 56, 1);
  font-size: 0.26rem;
  display: flex;
  justify-content: space-between;
}
.address span:nth-of-type(1) {
  width: 3.6rem;
}
.address span:nth-of-type(2) {
  color: rgba(166, 166, 166, 1);
  font-size: 0.2rem;
  width: 2.6rem;
}
.product {
  color: rgba(80, 80, 80, 1);
  font-size: 0.26rem;
  margin-top: 0.2rem;
}
.product span {
  font-size: 0.3rem;
  color: #f00;
}
.price {
  display: flex;
  justify-content: space-between;
}
.price span:nth-of-type(1) {
  color: rgba(56, 56, 56, 1);
  font-size: 0.28rem;
  font-weight: bold;
}
.delOrder {
  margin-left: 1.5rem;
}
</style>
