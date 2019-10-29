<template>
  <div class="orderDetail">
    <div class="info">
      <ul>
        <li>
          <span>外卖订单:33412823848583</span>
          <span>2019-01-07 14:22</span>
        </li>
        <li>
          <div class="product">
            <p class="product-name">标准美式</p>
            <p>大/单份糖/单份奶/热</p>
          </div>
          <span class="num">x1</span>
          <span class="price">￥21</span>
        </li>
        <li>
          <span>配送费</span>
          <span class="price">￥6</span>
        </li>
        <li>
          <span>使用咖啡钱包</span>
          <span class="price">-￥21</span>
        </li>
        <li>
          <p>共1件商品</p>
          <p>实付<span class="price">￥6</span></p>
        </li>
      </ul>
    </div>
    <div class="address">
      <p><span>收货地址</span><span>北京市朝阳区青年汇佳园10号楼102号楼...</span></p>
      <p><span class="name">piu先生</span><span class="tel">13244234213</span></p>
    </div>
    <div class="banner">
      <img src="../../assets/banner.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail'
}
</script>

<style scoped>
.info {
  height: 4.5rem;
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
li:nth-of-type(3) {
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
