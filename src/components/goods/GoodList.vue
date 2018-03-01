<template>
  <div class="goods-list">
     <div class="goods-item">
       <img>
       <h1 class="title">****</h1>
       <div class="info">
         <p class="price">
           <span class="now"></span>
           <span class="old"></span>
         </p>
         <p class="sell">
           <span>red</span>
           <span>green</span>
         </p>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .good-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background: #eee;
      .price{
        margin: 0;
        padding: 5px;
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
}
</style>


