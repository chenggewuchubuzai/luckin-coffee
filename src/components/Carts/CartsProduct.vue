<template>
  <div class="product">
    <ul>
      <van-checkbox-group v-model="result">
        <li v-for="item in cartsList" :key="item.id">
          <van-checkbox :name="item.id" checked-color="rgba(136, 175, 213, 1)" />
          <div>
            <div class="title">
              <h2>{{ item.name }}</h2>
              <van-tag type="warning" size="mini" class="tip">充2赠1</van-tag>
            </div>
            <p>{{ item.desc }}</p>
          </div>
          <span class="price">￥{{ item.price }}</span>
          <van-stepper v-model="item.num" input-width="20px" button-size="20px" color="red" /></li
      ></van-checkbox-group>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartsProduct',
  data() {
    return {
      checked: 'true',
      result: []
    }
  },
  computed: {
    ...mapState('cartsProducts', ['cartsList'])
  }
}
</script>

<style scoped>
li {
  height: 1.6rem;
  display: flex;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1px;
}
.title {
  display: flex;
  align-items: center;
}
h2 {
  font-size: 0.3rem;
  color: rgba(56, 56, 56, 1);
}
.tip {
  margin-left: 0.2rem;
}
.price {
  font-size: 0.36rem;
  margin-left: 1rem;
}
</style>
