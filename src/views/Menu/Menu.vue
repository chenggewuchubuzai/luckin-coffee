<template>
  <div class="menu">
    <h1>选择饮品和小食</h1>
    
   <div class="section">
      <van-swipe :autoplay="3000" indicator-color="white" class="ban">
          <van-swipe-item><img src="../../assets/v-banner1.jpg" alt=""/></van-swipe-item>
          <van-swipe-item><img src="../../assets/v-banner2.jpg" alt=""/></van-swipe-item>
        </van-swipe>
        <van-tree-select size=20px :items="items" :height="240" :main-active-index.sync="activeIndex">
          <template slot="content" class="content">
            <div v-if="activeIndex === 0">
              <ul>
                <li v-for='(goods,index) in list' :key='index'>
                  <van-card
                    num="1"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    @click='JumpDetails'>
                    <div slot="footer" >
                      <van-icon size=0.44rem name="add"/>
                    </div>
                  </van-card>
                </li>
              </ul>
            </div>
            <div v-if="activeIndex === 1">
              <ul>
                <li>2</li>
                <li>2</li>
              </ul>
            </div>
            <div v-if="activeIndex === 2">
              <ul>
                <li>3</li>
                <li>3</li>
              </ul>
            </div>
            <div v-if="activeIndex === 3">
              <ul>
                <li>4</li>
                <li>4</li>
              </ul>
            </div>
            <div v-if="activeIndex === 4">
              <ul>
                <li>5</li>
                <li>5</li>
              </ul>
              
            </div>
          </template>
        </van-tree-select>
   </div>
   
   
  </div>
</template>

<script>
  import {products} from '../../api/product';


  export default {
    name: 'Menu',

    components: {
      
    },
    data() {
      return {
        list:[],
        activeIndex: 0,
        items: [
          { text: '人气Top' },
          { text: '大师咖啡' },
          { text: '零度拿铁' },
          { text: '瑞纳冰' },
          { text: '经典饮品' }
        ]
        
      }
      
    },
    async created(){
      let result=await products({page,per})
      this.result=result.data.products
      this.list=this.result
    },
    
    methods: {
      //点击加入购物车
      AddCar(){
        alert('加入购物车')
      },
      JumpDetails(){
        this.$router.push({name:'Details'})
      }
    },
    
  }
</script>
<style scoped>
  
   
  /*  {
    margin: 0;
    padding: 0;
  } */
  .ban img {
    width: 100%;
    height: 2.6rem;
  }
  h1 {
    font-size: 0.36rem;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
  }

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    
  }
  .section{
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
  }
  
</style>
