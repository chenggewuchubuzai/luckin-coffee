<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="banner">
      <van-swipe-item>
        <img src="../../assets/hom1.jpg" alt="1" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/hom2.jpg" alt="2" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/hom3.jpg" alt="3" />
      </van-swipe-item>
    </van-swipe>

    <ul class="option">
      <li>
        <div class="item">
          <h2>威科姆大厦</h2>
          <p>距您100m</p>
        </div>
        <div class="maptoggle">
          <van-switch size="0.5rem" v-model="checked" />
        </div>
      </li>
      <router-link tag="li" :to="{ name: 'Menu' }">
        <div class="item">
          <h2>现在下单</h2>
          <p>OREDR NOW</p>
        </div>
        <div class="icon">
          <img src="../../assets/option1.svg" alt="咖啡" />
        </div>
      </router-link>
      <router-link tag="li" :to="{ name: 'Coffer' }">
        <div class="item">
          <h2>咖啡钱包</h2>
          <p>COFFRR WALLET</p>
        </div>
        <div class="icon">
          <img src="../../assets/option2.svg" alt="钱包" />
        </div>
      </router-link>
      <li>
        <div class="item">
          <h2>瑞幸潮品</h2>
          <p>LUCKIN POP</p>
        </div>
        <div class="icon">
          <img src="../../assets/option3.svg" alt="潮品" />
        </div>
      </li>
      <li>
        <div class="item">
          <h2>优惠联盟</h2>
          <p>REWARDS UNION</p>
        </div>
        <div class="icon">
          <img src="../../assets/option4.svg" alt="优惠" />
        </div>
      </li>
    </ul>

    <div class="home-b">
      <img src="../../assets/hom-b.png" alt="主页抽奖 img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
.home {
  flex: 1;
  overflow: auto;
}
.banner img {
  width: 100%;
  height: 4.16rem;
}
.option {
  width: calc(100% - 30px);
  height: auto;
  padding: 0 0.3rem 0 0.3rem;
}
.option li {
  border-bottom: 2px solid rgba(242, 242, 242, 1);
  width: auto;
  height: 1.38rem;
}
.item {
  float: left;
  margin-top: 0.27rem;
}
.item h2 {
  color: rgba(56, 56, 56, 1);
  font-size: 0.32rem;
  line-height: 0.5rem;
}
.item p {
  color: rgba(128, 128, 128, 1);
  font-size: 0.22rem;
}
.icon {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 2px solid rgba(99, 71, 58, 1);
  float: right;
  margin-top: 0.27rem;
  text-align: center;
  line-height: 0.7rem;
}
.option img {
  width: 0.48rem;
  height: 0.48rem;
  vertical-align: middle;
}
.home-b {
  padding: 0 0.3rem 0 0.3rem;
  margin-bottom: 0.2rem;
}
.home-b img {
  width: 100%;
}
.maptoggle {
  float: right;
  margin-top: 0.4rem;
}
</style>
