<template>
  <van-goods-action>
    <van-goods-action-button type="info" text="充2赠1" />
    <van-goods-action-button type="warning" text="立即购买" @click="onClickButton(proId)" />
    <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton2(proId)" />
  </van-goods-action>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { addToCarts } from '../../api/product'

export default {
  props: ['proId'],
  methods: {
    ...mapActions('cartsProducts', ['loadCartData']),
    onClickButton(id) {
      this.$router.push({ name: 'Confirm' })
    },
    async onClickButton2(id) {
      const result = await addToCarts(id)
      // console.log(result)
      // console.log(id)
      this.$toast({
        message: '添加购物车成功'
      }),
        this.$router.push({ name: 'Carts' })
    }
  }
}
</script>
