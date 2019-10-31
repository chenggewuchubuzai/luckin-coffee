<template>
  <div class="empty">
    <img src="../../assets/cart.png" alt="" />
    <p>您的购物车有点寂寞</p>
    <van-button class="btn" plain hairline type="info" style="width:2rem;height:0.6rem" :to="{ name: 'Menu' }"
      >去喝一杯</van-button
    >
  </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style scoped>
.empty {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  margin: 0.4rem 0;
}
img {
  width: 1.8rem;
  height: 1.2rem;
}
.btn {
  text-align: center;
  line-height: 0.6rem;
}
</style>
