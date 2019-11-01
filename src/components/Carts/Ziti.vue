<template>
  <div>
    <div class="ziti">
      <van-switch v-model="checked" @input="change()" size="large" /><span class="outside">自提</span>
      <div class="right">
        <p>立即取餐</p>
        <p class="time">约<span>14:42</span>可取</p>
      </div>
    </div>
    <div class="orderInfo" style="min-height: 5rem; overflow: auto;">
      <div class="addressInfo">
        <div class="address">
          <p>自提门店</p>
          <p>青年汇店(No.1795)</p>
          <p>朝阳区朝阳北路青年汇102号楼一层123室</p>
        </div>
        <img src="../../assets/jt.svg" alt="" />
      </div>
      <div class="info">
        <p>订单信息</p>
        <div class="detail" v-for="(i,index) in buyArr" :key="index">
          <div class="product" >
            <p>{{i.product.name}}</p>
            <p>大/单份糖/单份奶/热</p>
          </div>
          <span class="num">{{i.quantity}}</span>
          <span class="price">￥{{i.product.price}}</span>
        </div>
      </div>
      <div class="total">合计：<span>￥{{total}}</span></div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'



export default {
  name: 'Ziti',
  data() {
    return {
      checked: false,
      
    }
  },
  computed: {
    ...mapState('cartsProducts',['buyArr','total',])
  },
  methods: {
    ...mapMutations('isDelivery', ['change']),
  
  },
    
}
</script>

<style scoped>
.ziti {
  border-top: 1px solid #ccc;
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  align-items: center;
  background: #fff;
}
.outside {
  margin-left: -2.9rem;
  font-size: 0.28rem;
  font-weight: bold;
}
.right {
  text-align: right;
  font-size: 0.26rem;
  color: rgba(56, 56, 56, 1);
  font-weight: bold;
}
.time {
  color: rgba(128, 128, 128, 1);
  font-weight: normal;
}
.time span {
  font-size: 0.4rem;
  color: rgba(136, 175, 213, 1);
}
.orderInfo {
  height: 4rem;
  margin: 0.2rem 0;
  background: #fff;
}
.addressInfo {
  display: flex;
  justify-content: space-between;
  height: 1.38rem;
  width: 6.9rem;
  color: rgba(56, 56, 56, 1);
  padding: 0.16rem 0.3rem 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
img {
  width: 0.28rem;
}
.address p:nth-of-type(1),
.info > p {
  font-size: 0.26rem;
  font-weight: bold;
  margin-bottom: 0.16rem;
}
.address p:nth-of-type(2) {
  font-size: 0.28rem;
}
.address p:nth-of-type(3) {
  font-size: 0.24rem;
}
.info {
  padding: 0.16rem 0.3rem;
  color: rgba(56, 56, 56, 1);
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product > p:nth-of-type(1) {
  font-size: 0.28rem;
  font-weight: bold;
}
.price {
  font-weight: bold;
}
.total {
  height: 0.98rem;
  text-align: right;
  line-height: 0.98rem;
  padding-right: 0.3rem;
}
.total span {
  font-weight: bold;
  font-size: 0.32rem;
}
</style>
