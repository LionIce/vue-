<template>
  <div class="photoinfo-container">
    <h2>{{imageInfo.title}}</h2>
    <p class="subtitle">
        <span>发表时间:{{imageInfo.add_time|dataFormat}}</span>
        <span>点击:{{imageInfo.click}}次</span>
    </p>
    <br>

    <!-- 缩略图区 -->
    <div class="thumbs">
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>
    <!-- 图片内容区 -->
   <div class="content" v-html="imageInfo.content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"//评论组件
export default {
  data(){
      return {
          id:this.$route.params.id,
          imageInfo:{},
          list:[]//缩略图
      }
  },
  created(){
      this.getPhotoInfo();
      this.getThumbs();
  },
  methods:{
      getPhotoInfo(){
          this.$http.get("http://vue.studyit.io/api/getimageInfo/"+this.id).then(result=>{
              if(result.body.status===0){
                  this.imageInfo=result.body.message[0];
              }else{
                  Toast("获取信息出错")
              }
          })
      },
      getThumbs(){
          this.$http.get("http://vue.studyit.io/api/getthumimages/"+this.id).then(result=>{
              if(result.body.status===0){
                  result.body.message.forEach(item => {
                      item.w=600;
                      item.h=400;
                  });
                  this.list=result.body.message;
                  console.log(this.list)
              }
          })
      }
  },
  components:{
      'cmt-box':comment
  }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    margin: 0 3px;
    h2{
      color:#26a2ff;
      font-size:15px;
      text-align: center;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
    }
    .content{
      font-size: 14px;
    }
    .thumbs{
        img{
            margin: 10px;
            box-shadow: 0 0 6px #ccc;
        }
    }
  } 
</style>