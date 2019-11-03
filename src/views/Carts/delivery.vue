<template>
  <div class="app">
    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft()" />
    <div class="main">
      <div class="center" @click="checkOver(item._id)" v-for="item in addList" :key="item._id">
        <p class="address">{{ item.regions }}</p>
        <span>{{ item.receiver }}</span>
        <span>{{ item.mobile }}</span>
        <a class="edit" @click="edits(item._id)">修改</a>
        <i
          @click="del(item._id)"
          class="el-icon-delete"
          style=" bottom: 0.1rem;font-size:0.45rem;position:absolute;right:0.5rem"
        ></i>
      </div>
    </div>
    <van-button
      type="info"
      style="width:6.9rem;height:0.8rem;margin:0.3rem 0.3rem;"
      @click="addBtn"
      color="rgba(144, 192, 239, 1)"
      >+添加地址</van-button
    >
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
    checkOver(id) {
      this.$router.push({ name: 'Confirm', params: { id: id } })
      console.log('ok')
    },
    addBtn() {
      this.$router.push('/address')
    },
    onClickLeft(i) {
      this.$router.push({ name: 'Confirm' })
    },
    async del(id) {
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
.main {
  flex: 1;
  overflow: auto;
}
.center {
  height: 1.27rem;
  background: #fff;
  margin: 0.2rem 0;
  padding-top: 0.2rem;
  box-sizing: border-box;
  position: relative;
}
.center span {
  margin: 0 0.2rem 0 0.4rem;
  font-size: 0.28rem;
  color: rgba(128, 128, 128, 1);
}
.foot {
  margin-top: 0.2rem;
}
.address {
  font-size: 0.3rem;
  margin-left: 0.4rem;
  margin-bottom: 0.16rem;
}
.edit {
  font-size: 0.35rem;
  color: #f00;
  margin-right: 0.4rem;
  position: absolute;
  right: 1rem;
  bottom: 0.1rem;
}
</style>
