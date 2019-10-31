<template>
  <div class="detailss">
    <div class="section">
      <div class="pic">
        <img :src="goods.coverImg" style="height:260px" alt="" />
        <van-icon name="arrow-left" size="20px" class="back" @click="Back" />
      </div>
      <div class="dec">
        <h1>{{ goods.name }}</h1>
        <p>{{ goods.content }}</p>
        <ul>
          <li><em>规格</em><button :class="[checkColor1 === 1 ? 'check' : 'old']" @click="check(1)">大</button></li>
          <li>
            <em>温度</em><button :class="[checkColor2 === 1 ? 'check' : 'old']" @click="check2(1)">冰</button
            ><button :class="[checkColor2 === 2 ? 'check' : 'old']" @click="check2(2)">热</button>
          </li>
          <li>
            <em>糖度</em><button :class="[checkColor3 === 1 ? 'check' : 'old']" @click="check3(1)">全糖(推荐)</button
            ><button :class="[checkColor3 === 2 ? 'check' : 'old']" @click="check3(2)">半糖</button>
          </li>
          <li>
            <em>奶</em><button :class="[checkColor4 === 1 ? 'check' : 'old']" @click="check4(1)">无奶</button
            ><button :class="[checkColor4 === 2 ? 'check' : 'old']" @click="check4(2)">单份奶</button
            ><button :class="[checkColor4 === 3 ? 'check' : 'old']" @click="check4(3)">双份奶</button>
          </li>
        </ul>
      </div>
      <div class="dks">
        <h2 style="color: rgba(56, 56, 56, 1);margin-bottom:0.2rem ;">大咖说</h2>
        <div class="dks-2">
          <dl>
            <dt
              style="float: left;margin-right:0.2rem;width: 0.5rem;height: 0.5rem;border-radius:50%;overflow: hidden;"
            >
              <img src="../../assets/v-banner3.jpg" alt="" />
            </dt>
            <dd style="font-size: 0.24rem;">井崎英典<span>WBC世界冠军</span></dd>
            <dd class="dd-2">
              一颗阿拉比卡豆，走下哥伦比亚山后的每个环节，我都要亲手控制，仔细甄别，知道捕捉到他柔软细腻的风味
            </dd>
          </dl>
        </div>
      </div>
      <div class="he">
        <h3 style="margin:0.2rem ;">商品详情</h3>
        <p style="font-size: 0.3rem;text-indent:2em">{{ goods.descriptions }}</p>
      </div>

      <!-- <div style="height:100px"></div> -->
    </div>
    <!--  <div class="pri">
      <h2></h2>
      <p style="font-size: 0.28rem;font-weight: 600;">￥ {{ goods.price }}</p>
      <p>{无糖} + {无奶}</p>
      <van-stepper v-model="goods.num" style="float: right;margin-top:-0.3rem ;" />
    </div> -->
    <GoodsAction :proId="id"></GoodsAction>
  </div>
</template>
<script>
import { getProductById } from '../../api/product.js'
import GoodsAction from '../../components/Menu/GoodsAction'

export default {
  components: { GoodsAction },
  data() {
    return {
      id: this.$route.params.id,
      checkColor1: 0,
      checkColor2: 0,
      checkColor3: 0,
      checkColor4: 0,
      goods: {
        name: '',
        price: ''
      }
    }
  },
  async created() {
    let id = this.$route.params.id
    console.log(id)
    let result = await getProductById(id)
    console.log(result)

    this.goods = result.data
    console.log(this.goods)
  },
  name: 'Details',
  methods: {
    Back() {
      this.$router.go(-1)
    },
    check(i) {
      this.checkColor1 = i
    },
    check2(i, x) {
      if (x) {
        this.checkColor2 = i
      } else {
        this.checkColor2 = i
      }
    },
    check3(i, x) {
      if (x) {
        this.checkColor3 = i
      } else {
        this.checkColor3 = i
      }
    },
    check4(i, x) {
      if (x) {
        this.checkColor4 = i
      } else {
        this.checkColor4 = i
      }
    }
  }
}
</script>

<style scoped>
.details {
  /* height: 100%; */
  flex: 1;
  display: flex;
  flex-direction: column;
}
.section {
  flex: 1;
  overflow: auto;
}

.pic img {
  width: 100%;
  position: relative;
}
.back {
  position: absolute;
  top: 0.4rem;
  left: 0.2rem;
}
.dec {
  padding-bottom: 0.2rem;
  border-bottom: 0.02rem solid rgba(242, 242, 242, 1);
  background: #fff;
}
.dec button {
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  margin-left: 0.3rem;
  border-radius: 0.3rem;
}
.dec li {
  margin-top: 0.3rem;
}
.dec em {
  width: 0.5rem;
  display: inline-block;
  margin-left: 0.3rem;
}
.dks {
  height: 1.5rem;
  background: #fff;
}
.dks h2 {
  font-size: 0.26rem;
  font-weight: 100;
}
.he {
  height: 200px;
  background: #fff;
}
.dd-2 {
  padding-left: 0.7rem;
}

.dks-2 span {
  margin-left: 0.3rem;
  display: inline-block;
  width: 1.8rem;
  height: 0.28rem;
  background: rgba(242, 242, 242, 1);
  color: rgba(53, 60, 177, 1);
  border-radius: 0.04rem;
  text-align: center;
}
.pri {
  /* line-height: 1rem; */
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0.65rem;

  background: cornflowerblue;
}

.old {
  border: 0;
  color: rgba(204, 192, 180, 1);
  background: #fff;
  border: rgba(204, 192, 180, 1) solid 0.04rem;

  /* border-radius:0.3rem ; */
}
.check {
  border: 0;
  color: #fff;
  background: rgba(204, 192, 180, 1);
  border: rgba(204, 192, 180, 1) solid 0.04rem;
}
</style>
