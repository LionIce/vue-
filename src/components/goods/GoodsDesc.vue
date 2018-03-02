<template>
  <div class="goodsdesc-container">
      <h1>{{detail.title}}</h1>
      <hr>
      <div class="content" v-html="detail.content"></div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          id:this.$route.params.id,
          detail:{}
      }
  },
  created(){
      this.getDetail();
  },
  methods:{
      getDetail(){
          this.$http.get("http://vue.studyit.io/api/goods/getdesc/"+this.id).then(result=>{
              if(result.body.status===0){
                  this.detail=result.body.message[0]
                  //console.log(this.getDetail)
              }
          })
      }
  }
}
</script>
<style lang="scss">
.goodsdesc-container{
    padding: 4px;
    h1{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>