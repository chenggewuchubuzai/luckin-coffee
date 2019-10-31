<template>
  <div class="love">
    <h2>
      <span class="left">猜你喜欢</span>
      <div class="right" @click="loadData(page)">
        <img src="../../assets/carts_icon.svg" alt="" /> <span>换一批</span>
      </div>
    </h2>
    <div class="list">
      <dl v-for="item in loveList" :key="item._id">
        <router-link :to="{ name: 'Details', params: { id: item._id } }">
          <dd><img :src="item.coverImg" alt="" /></dd
        ></router-link>
        <dt>
          <h3>{{ item.name }}</h3>
          <p>luckin coffee</p>
          <div class="price">
            <span class="current-price">{{ item.price }}</span>
            <span style="text-decoration:line-through" class="origin-price">￥38.00</span>
            <div @click="addHandle(item._id)"><img id="add" src="../../assets/add.svg" alt="" /></div>
          </div>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { addToCarts } from '../../api/product'

  export default {
    name: 'RecommendProduct',
    computed: {
      ...mapState('loveProducts', ['loveList', 'page'])
    },
    created() {
      this.loadData(this.page)
    },
    methods: {
      ...mapActions('loveProducts', ['loadData']),
      ...mapActions('cartsProducts', ['loadCartData']),
      async addHandle(id) {
        // console.log(getToken())
        const result = await addToCarts(id)
        // console.log(result)
        this.loadCartData()
      }
    }
  }
</script>

<style scoped>
  .love {
    margin: 0 auto;
    margin-top: 0.57rem;
    width: 6.9rem;
    height: 4.24rem;
  }
  h2 {
    height: 0.65rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    font-size: 0.3rem;
    color: rgba(56, 56, 56, 1);
  }
  .right {
    font-size: 0.22rem;
  }
  .right img {
    width: 0.33rem;
    margin-top: -0.1rem;
  }
  .right span {
    color: rgba(144, 192, 239, 1);
  }
  .list {
    display: flex;
    justify-content: space-around;
  }
  dl {
    width: 2.16rem;
    height: 3.6rem;
  }
  dt {
    text-align: center;
  }
  h3 {
    font-size: 0.22rem;
  }
  p {
    font-size: 0.1rem;
    color: rgba(166, 166, 166, 1);
  }
  dd img {
    width: 2.16rem;
    height: 2.16rem;
    border-radius: 0.1rem;
  }
  .price {
    width: 2.16rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.32rem;
    font-size: 0.12rem;
  }
  .original-price {
    margin-top: -3rem;
    color: #ccc;
  }
  .current-price {
    color: rgba(255, 141, 26, 1);
  }
  #add {
    width: 0.24rem;
    height: 0.24rem;
  }
</style>
