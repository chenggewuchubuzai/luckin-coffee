<template>
  <div>
    <ul>
      <li>
        <p class="head">
          <span>外卖订单：23847563928174</span><span style="color:rgba(166, 166, 166, 1)">已完成</span>
        </p>
        <div class="detail">
          <p class="address"><span>北京市朝阳区青年汇佳园10号...</span><span>2019-01-08 09:05</span></p>
          <p class="product">榛果拿铁等 共1件商品</p>
        </div>
        <p class="price">
          <span>￥12</span><van-tag plain class="again" size="large" @click="again()">再来一单</van-tag
          ><van-tag plain size="large" type="warning" color="rgba(144, 192, 239, 1)" @click="evaluate()"
            >去评价</van-tag
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Done',
  methods: {
    again() {
      this.$router.push({
        name: 'Menu'
      })
    },
    evaluate() {
      this.$router.push({
        name: 'Evaluate'
      })
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
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.address span:nth-of-type(2) {
  color: rgba(166, 166, 166, 1);
  font-size: 0.24rem;
}
.product {
  color: rgba(80, 80, 80, 1);
  font-size: 0.26rem;
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
.again {
  margin-left: 3.3rem;
}
</style>
