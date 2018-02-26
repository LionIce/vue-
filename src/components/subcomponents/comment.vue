<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea name="" id="" cols="30" rows="10" style="reszie:none" placeholder="最多支持100字" maxlength="100"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>

      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in commentList" :key="item.add_time">
              <div class="cmt-title">
                  第{{i+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time|dataFormat}}
              </div>
              <div class="cmt-body">
                  {{item.content==='undefined'?'此用户很懒，什么都没留下':item.content}}
              </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
      return{
          pageindex:1,
          commentList:[]
      }
  },
  props:["id"],
  created(){
      this.getComment();
  },
  methods:{
      getComment(){
          this.$http.get("http://vue.studyit.io/api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
              if(result.body.status===0){
                 // console.log(result.body.message);
                //   console.log(this.$route);
                //this.commentList=result.body.message;
                this.commentList=this.commentList.concat(result.body.message);
              }else{
                  Toast("评论信息获取失败");
              }
          })
      },
      getMore(){
          this.pageindex++;
          this.getComment();
      }
  }
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>


