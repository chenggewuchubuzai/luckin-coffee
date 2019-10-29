<template>
  <van-goods-action>
    <van-goods-action-button type="info" text="充2赠1" />
    <van-goods-action-button type="warning" text="立即购买" @click="onClickButton()" />
    <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton2(proId)" />
  </van-goods-action>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import { getToken } from '../../utils/token'

export default {
  props: ['proId'],
  methods: {
    ...mapActions('cartsProducts', ['loadCartData']),
    onClickButton() {
      this.$router.push('/confirm')
    },
    onClickButton2(id) {
      // console.log(id)
      axios
        .post(
          'http://localhost:3000/api/v1/shop_carts',
          {
            product: id
          },
          {
            headers: {
              authorization: `Bearer ${getToken()}`
            }
          }
        )
        .then(res => {
          this.loadCartData(),
            this.$toast({
              message: '添加购物车成功'
            }),
            this.$router.push({ name: 'Carts' })
        })
    }
  }
}
</script>
