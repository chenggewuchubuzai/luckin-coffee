<template>
  <div class="menu">
    <h1>选择饮品和小食</h1>
    
   <div class="section">
      <van-swipe :autoplay="3000" indicator-color="white" class="ban">
          <van-swipe-item><img src="../../assets/v-banner1.jpg" alt=""/></van-swipe-item>
          <van-swipe-item><img src="../../assets/v-banner2.jpg" alt=""/></van-swipe-item>
        </van-swipe>
        <van-tree-select size=20px :items="items" :height="425" :main-active-index.sync="activeIndex">
          <template slot="content" class="content">
            <div v-if="activeIndex === 0">
              <ul style="height: 200px;">
                <li v-for='(goods,index) in list' :key='goods._id'>
                  <van-card
                    :id="goods._id"
                    :price="goods.price"
                    :desc="goods.content"
                    :title="goods.name"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    :thumb-link="`#/details/${goods._id}`">
                    <div slot="footer" >
                      <van-icon size=0.44rem name="add"/>
                    </div>
                  </van-card>
                </li>
              </ul>
            </div>
            <div v-if="activeIndex === 1">
              <ul>
                  <li v-for='(goods,index) in list2' :key='index'>
                      <van-card
                        
                        :price="goods.price"
                        :desc="goods.content"
                        :title="goods.name"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                        :thumb-link="`#/details/${goods._id}`">
                        <div slot="footer" >
                          <van-icon size=0.44rem name="add"/>
                        </div>
                      </van-card>
                    </li>
              </ul>
            </div>
            <div v-if="activeIndex === 2">
              <ul>
                  <li v-for='(goods,index) in list3' :key='index'>
                      <van-card
                        
                        :price="goods.price"
                        :desc="goods.content"
                        :title="goods.name"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                        :thumb-link="`#/details/${goods._id}`">
                        <div slot="footer" >
                          <van-icon size=0.44rem name="add"/>
                        </div>
                      </van-card>
                    </li>
              </ul>
            </div>
            <div v-if="activeIndex === 3">
              <ul>
                  <li v-for='(goods,index) in list4' :key='index'>
                      <van-card
                        
                        :price="goods.price"
                        :desc="goods.content"
                        :title="goods.name"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                        :thumb-link="`#/details/${goods._id}`">
                        <div slot="footer" >
                          <van-icon size=0.44rem name="add"/>
                        </div>
                      </van-card>
                    </li>
              </ul>
            </div>
            <div v-if="activeIndex === 4">
              <ul>
                  <li v-for='(goods,index) in list5' :key='index'>
                      <van-card
                        :id="goods._id"
                        :price="goods.price"
                        :desc="goods.content"
                        :title="goods.name"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                        :thumb-link="`#/details/${goods._id}`">
                        <div slot="footer" >
                          <van-icon size=0.44rem name="add"/>
                        </div>
                      </van-card>
                    </li>
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
        list2:[],
        list3:[],
        list4:[],
        page:0,
        per:0,
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
      let result=await products({page:1,per:5})
      this.result=result.data.products
      this.list=this.result
      let result2=await products({page:2,per:5})
      this.result2=result2.data.products
      this.list2=this.result2
      let result3=await products({page:3,per:5})
      this.result3=result3.data.products
      this.list3=this.result3
      let result4=await products({page:4,per:5})
      this.result4=result4.data.products
      this.list4=this.result4
      let result5=await products({page:5,per:5})
      this.result5=result5.data.products
      this.list5=this.result5
    },
    
    
    methods: {
      //点击加入购物车
      AddCar(){
        alert('加入购物车')
      },
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
