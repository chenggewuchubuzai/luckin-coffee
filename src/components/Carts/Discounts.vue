<template>
  <div class="discounts">
    <ul>
      <li>
        <span>使用优惠</span>
        <van-switch v-model="checked" size="medium" />
      </li>
      <router-link :to="{ name: 'Carts' }">
        <li>
          <span>使用咖啡钱包</span><span class="right">1个可用</span><img class="jt" src="../../assets/jt.svg" alt="" />
        </li>
      </router-link>
      <router-link :to="{ name: 'Carts' }">
        <li>
          <span>使用优惠券</span><span class="right">6个可用</span
          ><img class="jt" src="../../assets/jt.svg" alt="" /></li
      ></router-link>
      <router-link :to="{ name: 'PayCenter' }">
        <li>
          <span>支付方式</span><span class="right way">支付宝支付</span
          ><img class="jt" src="../../assets/jt.svg" alt="" /></li
      ></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Discounts',
  data() {
    return {
      checked: true
    }
  }
}
</script>

<style scoped>
.discounts {
  background: #fff;
}
li {
  width: 7.5rem;
  height: 1rem;
  display: flex;

  border-top: 1px solid rgba(128, 128, 128, 0.1);
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.right {
  margin-left: 4.2rem;
  color: rgba(255, 141, 26, 1);
}
.way {
  color: rgba(128, 128, 128, 1);
}
.jt {
  width: 0.28rem;
}
</style>
