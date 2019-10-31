<template>
  <div class="adress">
    <van-nav-bar title="添加地址" left-arrow @click-left="onClickLeft" />
    <div class="b">
      <ul>
        <li>
          <label>联系人</label>
          <input type="text" placeholder="请输入你的名字" />
        </li>
        <li>
          <van-radio-group v-model="radio" class="dan">
            <label>性别</label>
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </li>
        <li>
          <label>手机号码</label>
          <input type="text" placeholder="请输入你的手机号" />
        </li>
        <li>
          <label>地址</label>
          <input type="text" placeholder="请输入你的地址" />
        </li>
        <li class="end">
          <label>标签</label>
          <van-tag round type="primary" plain>标签</van-tag>
          <van-tag round type="primary" plain>标签</van-tag>
          <van-tag round type="primary" plain>标签</van-tag>
        </li>
      </ul>
    </div>
    <van-button type="primary" @click="baocun">保存</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    baocun() {
      this.$eventBus.$emit('')
    }
  }
}
</script>
<style scoped>
html,
body,
.adress {
  height: 100%;
  width: 100%;
}
.adress {
  display: flex;
  flex-direction: column;
}
.a {
  height: 1rem;
}
.b {
  flex: 1;
}
.c {
  height: 1rem;
}
input {
  height: 0.6rem;
  width: 5rem;
  font-size: 0.3rem;
  border: 0;
}
label {
  font-size: 0.4rem;
}
li {
  height: 1rem;
  border-bottom: 1px solid #ccc;
  height: 1rem;
  line-height: 1rem;
}
.dan {
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 1rem;
  height: 1rem;
}
.van-tag--primary.van-tag--plain {
  font-size: 0.3rem;
  margin-left: 1rem;
}
</style>