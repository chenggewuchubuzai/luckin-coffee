<template>
  <div class="submit">
    <van-submit-bar label="应付合计：" :price="3050" button-text="去结算" button-type="info" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
  methods: {
    onSubmit() {
      console.log('submit')
    }
  }
}
</script>
