<template>
  <div>
      <!-- 头部导航区 -->
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
           <!-- <a class="mui-control-item mui-active">
                推荐
            </a> -->
            <a :class="['mui-control-item',item.id==0?'mui-active':'']"  v-for="item in navList" :key="item.id" @click="getFirstPage(item.id)">
                {{item.title}}
            </a>
        </div>
    </div>
    <!-- 大图展示区 -->
    <ul class="photo-list">
        <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
            <img v-lazy="item.img_url">
            <div class="info">
                <h1 class="info-title">{{item.title}}</h1>
                <div class="info-body">{{item.zhaiyao}}</div>
            </div>
        </router-link>
    </ul>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'
export default {
  data(){
      return {
          navList:[],
          list:[]//图片列表数组
      };
  },
  created(){
      this.getShareNav();
      this.getFirstPage(0);
  },
  methods:{
      getShareNav(){
          this.$http.get("http://vue.studyit.io/api/getimgcategory").then(result=>{
              if(result.body.status===0){
                result.body.message.unshift({title:'首页',id:0})
                this.navList=result.body.message;
                //console.log(this.navList); 
              }else{
                  Toast("获取头部导航信息错误")
             }
          })
      },
      getFirstPage(cateid){
          this.$http.get("http://vue.studyit.io/api/getimages/"+cateid).then(result=>{
              if(result.body.status===0){
                  this.list=result.body.message
                //   console.log(this.list=result.body.message);
              }else{
                  Toast("获取头部导航信息错误")
              }
          })
      }
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
  }
}
///api/getimages/:cateid
</script>
<style lang="scss" scoped>
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
  border:0;
}
*{
    touch-action: pan-y;
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 8px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
            }
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,.4);
            max-height: 84px;
            .info-title{
                font-size: 14px;
            }
            .info-zhaiyao{
                font-size: 13px;
            }
        }
    }
}

</style>



