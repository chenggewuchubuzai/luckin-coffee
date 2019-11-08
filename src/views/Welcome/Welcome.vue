<template>
  <div class="Welcome">
    <div class="btn-back" @click="enter">
      <img src="../../assets/bg_1.jpg" alt="" />
      <div class="box">
        跳过
        <i>{{ Time }}S</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Time: 5
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
  },
  methods: {
    enter() {
      this.$router.push('/home')
    }
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
  font-size: 0.3rem;
  padding: 0.2rem;
  border-radius: 0.1rem;
  background: rgba(158, 225, 128, 0.2);
}
</style>
