<template>
  
    <van-goods-action>
   
    <van-goods-action-button  type="info" text="充2赠1" @click="" />
    <van-goods-action-button type="warning" text="立即购买" @click="onClickButton" />
    <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton2" />
  </van-goods-action>
 
</template>

  <script>
  export default {
  methods: {

    onClickButton(){
      this.$router.push('/confirm')
    },
    
    onClickButton2(i) {
      this.$toast({
        message:'添加购物车成功'
})
   
    }
  }
}
  </script>

  <style>
    
  
  </style>