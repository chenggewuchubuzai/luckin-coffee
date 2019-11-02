<template>
  <div class="app">
    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft" />

    <div class="a">
      <!-- <p class="top">
        <span>我的收货地址</span>
        <span>管理我的收获地址</span>
      </p>-->
      <div class="centern" v-for="item in addList" :key="item._id" @click='checkOver(item._id)' >
        <p id="p">{{ item.regions }}</p>
        <van-tag type="primary">公司</van-tag>
        <span>{{ item.receiver }}</span>
        <span>{{ item.mobile }}</span>
        <!-- <p class="foot">{{item.updatedAt}}</p> -->
        <van-icon name="setting-o" class="edit" @click="edits(item._id)" />
        <van-icon name="clear" class="clear" @click="clearr(item._id)" />
        <!-- <p>{{item._id}}</p> -->
        <!-- <router-link :to="{name:'Detail',params:{id:item._id}}">
          <van-card
            :price="item.product_price"
            :desc="item.desc"
            :title="item.smallTitle"
            :thumb="item.coverImgUrl"
          />
        </router-link>-->
      </div>
    </div>
    <van-button type="info" @click="addbtn">+添加按钮</van-button>
  </div>
</template>
<script>
import { addressList, delAddress } from '../../api/address'
export default {
  data() {
    return {
      addList: []
    }
  },
  async created() {
    // const addLists = await addressList({
    //   pages: 20
    // })
    // console.log(addLists.data.addresses)
    // this.addList = addLists.data.addresses
    this.loadAddressList()
  },
  methods: {
    checkOver(id){
      this.$router.push({name:'Confirm',params:{ id: id }})
      console.log('ok')
    },

    addbtn() {
      this.$router.push('/address')
    },
    onClickLeft() {
      this.$router.push({ name: 'Confirm' })
    },
    async clearr(id) {
      let res = await delAddress(id)
      // console.log(res)
      this.loadAddressList('/address')
    },
    async loadAddressList() {
      const addLists = await addressList({
        pages: 20
      })
      console.log(addLists.data.addresses)
      this.addList = addLists.data.addresses
    },
    edits(id) {
      //console.log(id)
      this.$router.push({ name: 'Edit', params: { id: id } })
    }
  }
}
</script>

<style scoped>
html,
body,
.app {
  height: 100%;
  width: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.a {
  flex: 1;
  overflow: auto;
}
.a .top {
  display: flex;
  height: 0.7rem;
  justify-content: space-between;
  margin: 0 0.2rem;
  font-size: 0.25rem;
  color: aquamarine;
  overflow: auto;
}
.centern {
  height: 1.27rem;
  background: #fff;
  padding-top: 0.2rem;
  margin: 0 0.3rem;
  margin-bottom: 0.3rem;
}
.centern p {
  font-size: 0.22rem;
  margin-bottom: 0.2rem;
}
span {
  margin: 0 0.2rem 0 0.4rem;
  font-size: 0.25rem;
}
.foot {
  margin-top: 0.2rem;
}
#p {
  font-size: 0.3rem;
  margin-left: 0.5rem;
}
.clear {
  float: right;
  margin-right: 0.5rem;
  font-size: 0.5rem;
}
.edit {
  font-size: 0.5rem;
}
</style>
