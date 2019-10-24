<template>
  <div class="carts">
    <h1>购物车</h1>
    <img class="banner" src="../../../public/images/carts_top.png" alt="" />
    <div class="section">
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubmitBar from '@/components/Carts/SubmitBar'

export default {
  name: 'Carts',
  components: {
    SubmitBar
  },
  data() {
    return {
      list: []
    }
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  width: 7.5rem;
  height: 0.88rem;
  top: 0.2rem;
  color: rgba(56, 56, 56, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 0.36rem;
  line-height: 0.88rem;
  text-align: center;
  font-weight: bold;
}
.banner {
  width: 7.5rem;
  height: 1.35rem;
  top: 0.64rem;
}
.carts {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.section {
  flex: 1;
  overflow: auto;
}
</style>
