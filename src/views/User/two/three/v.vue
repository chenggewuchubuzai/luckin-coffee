<template>
  <button @click="ccc">sdf</button>
</template>

<script>
export default {
  methods: {
    ccc() {
      this.$dialog.alert({
        message: '此功能暂未开发'
      })
    }
  }
}
</script>