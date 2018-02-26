<template>
    <div class="detail">
       <h3 class="title">{{newList.title}}</h3>
       <p class="subtitle">
           <span>发表时间:{{newList.add_time|dataFormat}}</span>
           <span>点击次数:{{newList.click}}次</span>
       </p>
       <hr>
       <div class="content" v-html="newList.content"></div>

       <!-- 评论组件区域 -->
       <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
import {Toast} from 'mint-ui'
export default {
  data(){
      return{
          id:this.$route.params.id,
          newList:{}
      }
  },
  created(){
      this.getDetail()
  },
  methods:{
      getDetail(){
          this.$http.get("http://vue.studyit.io/api/getnew/"+this.id).then(result=>{
            if(result.body.status===0){
                //console.log(result.body.message);
                this.newList=result.body.message[0];
            }else{
                Toast("新闻列表数据错误")
            }
              
          })
      }
  },
  components:{
      "comment-box":comment
  }
}
</script>
<style lang="scss">
.detail{
    .title{
        font-size: 14px;
        color: red;
        text-align: center;
        margin-top: 5px;
    }
    .subtitle{
        margin-top: 10px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>


