<template>
  <div>
    <van-nav-bar title="评价" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="box">
      <span class="good-bad">{{ comments }}</span>
      <div class="sel">
        <span @click="good()"><img src="../../assets/good.svg" alt=""/></span>
        <span @click="bad()"><img src="../../assets/bad.svg" alt=""/></span>
      </div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="2"
          style="width:6.9rem;height:2.5rems;margin:0 auto;background:rgba(248, 248, 248, 1)"
          label="留言"
          type="textarea"
          maxlength="200"
          placeholder="请输入评价内容"
          show-word-limit
        />
      </van-cell-group>
    </div>
    <div class="footer">
      <van-button id="btn" color="rgba(144, 192, 239, 1)" style="width:6.9rem;height:0.8rem;" type="primary"
        >提交</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evaluate',
  data() {
    return {
      message: '',
      comments: '好评！'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    good() {
      this.comments = '好评！'
    },
    bad() {
      this.comments = '差评！'
    }
  }
}
</script>

<style scoped>
.box {
  height: 5.7rem;
  background: #fff;
  padding: 0.53rem 0.29rem 0.38rem 0.31rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.good-bad {
  width: 1.1rem;
  height: 0.54rem;
  display: block;
  font-size: 0.36rem;
  color: rgba(56, 56, 56, 1);
  margin-left: 0.3rem;
}
img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.3rem;
}
.footer {
  background: #fff;
  margin: 5.5rem auto 0;
  background: #fff;
  height: 1.2rem;
}
#btn {
  margin: 0.2rem 0.3rem;
}
</style>
