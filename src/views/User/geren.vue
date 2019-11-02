<template>
  <div class="ge">
    <van-nav-bar title="个人资料" id="top" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="centers">
      <div class="center">
        <span>头像</span>
        <div>
          <img src="../../assets/logo1.jpg" alt class="logo" />
          <img src="../../assets/jiantou.svg" alt class="jiantou" />
        </div>
      </div>
      <ul>
        <li @click="yonghuming">
          <span>用户名</span>
          <div>
            <span>{{ value }}</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li @click="show = true">
          <span>性别</span>
          <div>
            <span>{{ res }}</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
          </div>
        </li>
        <li>
          <span>绑定手机</span>
          <div>
            <span>18339738601</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li @click="weixin">
          <span>绑定微信</span>

          <div>
            <span>{{ wei }}</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li>
          <span>国际信用卡绑定</span>
          <div>
            <span>已绑定</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li class="shou" @click="shouhuo">
          <span>收货地址</span>
          <div>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li>
          <span>多语言</span>
          <div>
            <span>简体中文</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li>
          <span>推送通知</span>
          <div>
            <span>已开启</span>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <li>
          <span>注销账号</span>
          <div>
            <img src="../../assets/jiantou.svg" alt class="jiantou" />
          </div>
        </li>
        <van-button type="primary" @click="Exit()" class="btn">退出登录</van-button>
      </ul>
    </div>
  </div>
</template>
<script>
import { getToken, removeToken } from '../../utils/token'
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '男' }, { name: '女' }, { name: '取消' }],
      res: '',
      value: this.$route.query.t,
      wei: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    geren() {
      this.$router.go(-1)
    },
    yonghuming() {
      this.$router.push('/geren/yonghuming')
    },
    // 这个是选择男女的
    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false
      console.log(item)
      //   Toast(item.name)
      if (item.name == '取消') {
      } else {
        this.res = item.name
      }
    },
    // 绑定微信
    weixin() {
      this.$dialog
        .confirm({
          message: '确定要绑定微信吗'
        })
        .then(() => {
          this.wei = '已绑定'
        })
    },
    shouhuo() {
      this.$router.push('/shouhuo')
    },
    Exit() {
      if (getToken()) {
        removeToken()
        this.$router.push({ name: 'User' })
      }
    }
  }
}
</script>
<style scoped>
.ge {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.center {
  height: 1.5rem;
  padding-left: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.25rem;
}
.centers {
  flex: 1;
  margin-top: 0.8rem;
}
.logo {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
.jiantou {
  width: 0.38rem;
  height: 0.38rem;
  margin-right: 0.3rem;
  margin-left: 0.2rem;
}
ul {
  height: 9rem;
}
li {
  height: 1.1rem;
  background: #fff;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  display: flex;
  padding-left: 0.3rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.25rem;
}
.centers {
  display: flex;
  overflow: auto;
  flex-direction: column;
}
.btn {
  margin: 0.5rem auto 0.5rem;
  height: 1rem;
  display: block;
  width: 80%;
  font-size: 0.25rem;
}
.shou {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.1);
}
</style>
