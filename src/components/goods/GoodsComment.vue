<template>
  <div>
      <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data(){
      return {
          
          pageIndex:1
      }
  },
  created(){
      
  },
  methods:{
    
  },
  components:{
      comment
  }
}
</script>
<style lang="scss" scoped>

</style>


