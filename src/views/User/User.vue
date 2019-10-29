<template>
  <div class="user">
    <div class="top">
      <img src="../../assets/logo1.jpg" alt class="logo" />
      <van-row type="flex" class="zhong">
        <a @click="zhanghu()">
          <!-- <van-col span="6"> -->
          <div>0元</div>
          <div>账户余额</div>
          <!-- </van-col> -->
        </a>
        <a @click="go()">
          <div>0杯</div>
          <div>咖啡钱包</div>
        </a>
        <a @click="qiye">
          <div>7张</div>
          <div>优惠券</div>
        </a>
        <router-link :to="{name:'Qiye'}">
          <div>0张</div>
          <div>礼品卡</div>
        </router-link>
      </van-row>
    </div>

    <ul>
      <li></li>
      <!-- <router-link :to="{name:'Geren'}"> -->
      <li @click="geren">
        <span>个人资料</span>
        <img src="../../assets/jiantou.svg" alt class="jian" />
      </li>
      <!-- </router-link> -->
      <!-- <router-link :to="{name:'Duihuan'}"> -->
      <li @click="duihuan">
        <span>兑换优惠</span>
        <img src="../../assets/jiantou.svg" alt class="jian" />
      </li>
      <!-- </router-link> -->
      <!-- <router-link :to="{name:'Fapiao'}"> -->
      <li @click="fapiao">
        <span>发票管理</span>
        <img src="../../assets/jiantou.svg" alt class="jian" />
      </li>
      <!-- </router-link> -->
      <router-link :to="{name:'Qiye'}">
        <li>
          <span>企业账号</span>
          <img src="../../assets/jiantou.svg" alt class="jian" />
        </li>
      </router-link>
    </ul>
    <router-link :to="{name:'Qiye'}">
      <p class="help">
        <span>帮组反馈</span>
      </p>
    </router-link>
    <div class="tu">
      <img src="../../assets/tu.jpg" alt />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'User',
  methods: {
    go() {
      this.$router.push('/coffer')
    },
    zhanghu() {
      this.$router.push('/zhanghu')
    },
    qiye() {
      this.$router.push('/qiye')
    },
    geren() {
      this.$router.push('/geren')
    },
    duihuan() {
      this.$router.push('/duihuan')
    },
    fapiao() {
      this.$router.push('/fapiao')
    }
  }
}
</script>

<style scoped>
html,
body,
.user {
  width: 100%;
}
.user {
  /* display: flex;
  flex: 1;
  flex-direction: column; */
  overflow: auto;
}

.top {
  display: flex;
  width: 100%;
  background: url(../../assets/background.jpg) no-repeat;
  height: 3.6rem;
  position: relative;
}
.logo {
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 50%;
  position: absolute;
  top: 1.4rem;
  left: 0.4rem;
}
ul {
  width: 100%;
  height: 5rem;

  border-bottom: 0.2rem solid #ccc;
}
li {
  margin-left: 0.5rem;
  height: 1rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 0.25rem;
}
.help {
  height: 1rem;
  border-bottom: 0.2rem solid #ccc;
}
.help span {
  height: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.2rem;
  margin-left: 0.5rem;
  font-size: 0.25rem;
}
.tu {
  height: 2.7rem;
  width: 100%;
}
.tu img {
  height: 2.7rem;
  width: 100%;
}
.jian {
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.3rem;
}
.zhong {
  /* margin-left: 0.3rem; */
  box-shadow: #ccc;
  border-radius: 10%;
  height: 1rem;
  width: 6.5rem;
  position: absolute;
  top: 3.3rem;
  left: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-left: 0.7rem;
}
.zhong van-col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

