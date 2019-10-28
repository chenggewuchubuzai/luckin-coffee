<template>
  <div class="Welcome">
    <div class="btn-back">
      <img src="../../assets/bg_1.jpg" alt="" />
      <div class="box">
        跳过
        <i>{{ Time }}s</i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        Time: 3
      }
    },
    created() {
      let loadTime = setInterval(() => {
        this.Time -= 1
        if (this.Time == 0) {
          this.$router.push('/home')
          window.clearInterval(loadTime)
        }
      }, 1000)
    }
  }
</script>
<style>
  .Welcome img {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .box {
    position: absolute;
    top: 0;
    right: 0;
    background: paleturquoise;
  }
</style>
