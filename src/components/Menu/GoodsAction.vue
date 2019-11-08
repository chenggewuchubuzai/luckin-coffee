<template>
  <van-goods-action>
    <van-goods-action-button type="info" text="充2赠1" />
    <van-goods-action-button type="warning" text="立即购买" @click="onClickButton(proId)" />
    <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton2(proId)" />
  </van-goods-action>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { addToCarts, getProductById } from '../../api/product'

export default {
  props: ['proId'],
  computed: {
    ...mapState('cartsProducts', ['buyArr'])
  },
  methods: {
    ...mapMutations('cartsProducts', ['count']),
    ...mapActions('cartsProducts', ['loadCartData']),
    async onClickButton(id) {
      const product = await getProductById(id)
      console.log(product.data)
      this.buyArr.push(product.data)
      console.log(this.buyArr)
      this.count()
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
