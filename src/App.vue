<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
