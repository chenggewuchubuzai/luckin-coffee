<template>
  <h1>
    <van-button type="info" @click="qiye">返回</van-button>
    <h2>此功能暂无开发</h2>
  </h1>
</template>
<script>
export default {
  methods: {
    qiye() {
      this.$router.go(-1)
    }
  }
}
</script>