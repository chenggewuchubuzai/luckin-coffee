<template>
  <div class="confirm">
    <van-nav-bar title="确认订单" id="top" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="section">
      <Ziti v-if="!isOutside"></Ziti>
      <Outside v-if="isOutside"></Outside>
      <Discount></Discount>
      <router-link :to="{ name: 'Carts' }">
        <div class="remark"><span>备注特殊要求</span><img class="jt" src="../../assets/jt.svg" alt="" /></div>
      </router-link>
      <div class="agree">
        <van-checkbox v-model="checked" shape="square" checked-color="rgba(136, 175, 213, 1)" icon-size="0.3rem"
          >我已阅读并同意<router-link :to="{ name: 'Carts' }" style="color:rgba(85, 122, 157, 1)"
            >《支付协议》</router-link
          ></van-checkbox
        >
        <p>温馨提示：仅支持开具电子发票，订单完成后可前往发票管理中开具</p>
      </div>
    </div>
    <van-submit-bar
      id="bottom"
      :price="isOutside ? (total + 6) * 100 : total * 100"
      label="还需付："
      button-text="去支付"
      button-type="info"
      @submit="onSubmit"
      decimal-length="0"
    >
    </van-submit-bar>
    <div class="kong"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Ziti from '../../components/Carts/Ziti'
import Outside from '../../components/Carts/Outside'
import Discount from '../../components/Carts/Discounts'
import { subOrder } from '../../api/order'
import { Dialog } from 'vant'

export default {
  name: 'Confirm',
  components: {
    Ziti,
    Outside,
    Discount
  },
  data() {
    return {
      checked: true,
      fixed: true
    }
  },
  computed: {
    ...mapState('isDelivery', ['isOutside']),
    ...mapState('cartsProducts', ['total', 'buyArr'])
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: 'Carts'
      })
    },
    onSubmit() {
      if (this.isOutside) {
        if (!this.$route.params.id) {
          Dialog.alert({
            message: '请选择收货地址'
          })
        } else {
          let ids = this.$route.params.id
          // console.log(this.buyArr)
          this.$router.push({
            name: 'Pay',
            params: { id: ids }
          })
        }
      } else {
        this.$router.push({
          name: 'Pay'
        })
      }
    }
  }
}
</script>

<style scoped>
.confirm {
  height: 100%;
  background-color: rgba(248, 248, 248, 1);
  display: flex;
  flex-direction: column;
  flex: 1;
}
.section {
  margin-top: 0.88rem;
  flex: 1;
  overflow: auto;
}
.remark {
  height: 1rem;
  background: #fff;
  font-size: 0.28rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin: 0.2rem 0;
}
.jt {
  width: 0.28rem;
}
.agree {
  height: 1.2rem;
  padding: 0 0.3rem;
}
.agree p {
  font-size: 0.22rem;
  color: rgba(166, 166, 166, 1);
}
.bottom {
  height: 1.2rem;
  clear: both;
}
.kong {
  height: 1rem;
}
</style>
