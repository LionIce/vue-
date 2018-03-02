<template>
<div>
    <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-if="ballflag" ref="ball"></div>
        </transition>
    
    <div class="goodsinfo-cantainer" v-for="item in goodsInfo" :key="item.id">
        
      <!-- 轮播图区 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区 -->
        <div class="mui-card">
            <div class="mui-card-header">{{item.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥{{item.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{item.sell_price}}</span>
                    </p>
                    <p>购买数量:<numbox @getcount="getSelectCount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{item.goods_no}}</p>
                    <p>库存情况:{{item.stock_quantity}}</p>
                    <p>上架时间:{{item.add_time|dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(item.id)">图文介绍</mt-button>
                <!-- <br/>flex布局br不生效 这里用样式覆盖掉flex-->
                <mt-button type="danger" size="large" plain @click="goComment(item.id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</div>
  
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  data(){
      return {
          id:this.$route.params.id,
          lunbotuList:[],
          goodsInfo:[],
          ballflag:false,
          selectCount:1
      }
  },
  created(){
      this.getImgInfo();
      this.getGoodsInfo();
  },
  methods:{
      getImgInfo(){
          this.$http.get("http://vue.studyit.io/api/getthumimages/"+this.id).then(result=>{
              if(result.body.status===0){
                  this.lunbotuList=result.body.message;
                  //console.log(this.lunbotuList)
              }
          })
      },
      getGoodsInfo(){
          this.$http.get('http://vue.studyit.io/api/goods/getinfo/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.goodsInfo=result.body.message;
                  //console.log(this.goodsInfo)
              }
          })
      },
      goDesc(id){
          this.$router.push("/home/gooodsdesc/"+id)
      },
      goComment(id){
          this.$router.push("/home/goodscomment/"+id)
      },
      addToShopCar(){
          this.ballflag = !this.ballflag;
          //console.log(this.$refs)
      },
      beforeEnter: function(el) {
        el.style.transform = "translate(0,0)";
      },
      enter: function(el, done) {
        el.offsetWidth;

        let ballP = this.$refs.ball.getBoundingClientRect();
        let badgeP = document.getElementById('badge').getBoundingClientRect();

        let left = badgeP.left - ballP.left;
        let top = badgeP.top - ballP.top;

        el.style.transform = `translate(${left}px,${top}px)`;
        el.style.transition = "all .7s cubic-bezier(.4,-0.3,1,.68)";
    
        done();
      },
      afterEnter: function(el) {
        this.ballflag = !this.ballflag;
      },
      getSelectCount(count){
          this.selectCount=count;
      }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-cantainer{
    background: #eee;
    overflow: hidden;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }
    
}
.ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: red;
        position: absolute;
        z-index: 99;
        left: 140px;
        top: 390px;
    }
</style>


