<template>
  <div>
    <!-- <p @click="show=true">选择</p> -->
    <!-- <h1>{{res}}</h1>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />-->
    <button @click="cccc">dddddd</button>
    <p>{{list}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ''
    }
  },
  methods: {
    cccc() {
      this.$dialog
        .confirm({
          message: '确定解除吗'
        })
        .then(() => {
          this.list = '已绑定'
        })
    }
  }
}
</script>