<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img class="imgimg" v-if="item.img" :src="item.img" :alt="item.src">
        <img class="srcimg" v-else :src="item.src" :alt="item.src">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
      return{
        
      }
      
  },
  props:['lunbotuList','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        text-align: center;
      img{
        //width: 100%;
        height: 100%;
      }   
    }
  }
  .full{
      width: 100%;
  }
</style>


