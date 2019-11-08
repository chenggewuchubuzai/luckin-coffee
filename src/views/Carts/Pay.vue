<template>
  <div class="pay">
    <van-nav-bar title="确认支付" left-text="取消" @click-left="onClickLeft" />
    <div class="payment">
      <div class="payInfo">
        <p>订单付款</p>
        <p>￥{{ isOutside ? total + 6 : total }}</p>
      </div>
      <div class="payee">
        <span>收款方</span>
        <span>luckincoffee瑞幸咖啡</span>
      </div>
    </div>
    <van-button
      @click="downOrder"
      id="btn"
      :to="{ name: 'Succeed' }"
      style="width:7.1rem;height:0.92rem;"
      type="primary"
      >立即支付</van-button
    >
    <div class="bottom">支付安全由中国人民财产保险股份有限公司承保</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { subOrder } from '../../api/order'
import { address } from '../../api/address.js'
import { getInfo } from '../../api/user'
import { getToken } from '../../utils/token'

export default {
  data() {
    return {
      Address: {}
    }
  },
  name: 'Pay',
  methods: {
    ...mapMutations('cartsProducts', ['clearArr', 'getDate']),
    async onClickLeft() {
      if (this.$route.params.id) {
        let result = await address(this.$route.params.id)
        console.log(result)
        let order1 = {
          receiver: result.data.receiver,
          regions: result.data.regions,
          address: false
        }
        order1.orderDetails = []
        this.buyArr.forEach(v => {
          let obj1 = {}
          obj1.quantity = v.quantity
          obj1.product = v._id ? v._id : v.product._id
          obj1.price = this.isOutside ? this.total + 6 : this.total
          order1.orderDetails.push(obj1)
        })
        let res = await subOrder(order1)
        console.log(res.data)
      } else {
        if (getToken()) {
          const result = await getInfo()
          // console.log(result)
          let order1 = {
            receiver: result.data.userName,
            regions: '朝阳区朝阳北路青年汇102号楼一层123室',
            address: false
          }
          order1.orderDetails = []
          this.buyArr.forEach(v => {
            let obj1 = {}
            obj1.quantity = v.quantity
            obj1.product = v._id ? v._id : v.product._id
            obj1.price = this.isOutside ? this.total + 6 : this.total
            order1.orderDetails.push(obj1)
          })
          let res = await subOrder(order1)
          console.log(res.data)
        }
      }

      this.$router.push({
        name: 'Cancel'
      })
    },
    async downOrder() {
      if (this.$route.params.id) {
        let result = await address(this.$route.params.id)
        console.log(result.data)
        let order = {
          receiver: result.data.receiver,
          regions: result.data.regions,
          address: true
        }
        order.orderDetails = []
        this.buyArr.forEach(v => {
          let obj = {}
          ;(obj.quantity = v.quantity),
            (obj.product = v._id ? v._id : v.product._id),
            (obj.price = this.isOutside ? this.total + 6 : this.total),
            order.orderDetails.push(obj)
        })
        let res = await subOrder(order)
      } else {
        if (getToken()) {
          const result = await getInfo()
          // console.log(result)
          let order1 = {
            receiver: result.data.userName,
            regions: '朝阳区朝阳北路青年汇102号楼一层123室',
            address: true
          }
          order1.orderDetails = []
          this.buyArr.forEach(v => {
            let obj1 = {}
            obj1.quantity = v.quantity
            obj1.product = v._id ? v._id : v.product._id
            obj1.price = this.isOutside ? this.total + 6 : this.total
            order1.orderDetails.push(obj1)
          })
          let res = await subOrder(order1)
          console.log(res.data)
        }
      }
    }
  },
  computed: {
    ...mapState('cartsProducts', ['total', 'buyArr']),
    ...mapState('isDelivery', ['isOutside'])
  }
}
</script>

<style scoped>
.pay {
  height: 100%;
  background: rgba(248, 248, 248, 1);
}
.payment {
  height: 3.13rem;
  background: #fff;
}
.payInfo {
  height: 2.11rem;
  border-bottom: 1px solid rgba(166, 166, 166, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.payInfo p:nth-of-type(1) {
  font-size: 0.36rem;
  font-weight: bold;
}
.payInfo p:nth-of-type(2) {
  font-size: 0.76rem;
  font-weight: bold;
}
.payee {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  color: rgba(128, 128, 128, 1);
  font-size: 0.28rem;
  padding: 0 0.3rem;
}
#btn {
  margin: 0.6rem 0.21rem 0 0.19rem;
}
.bottom {
  width: 5.04rem;
  height: 0.36rem;
  font-size: 0.24rem;
  color: rgba(166, 166, 166, 1);
  margin: 7.2rem auto 0;
}
</style>
