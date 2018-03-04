<template>
  <div class="shopcar-container">
      <!-- 商品列表 -->
      <div class="goods-list"  v-for="(item,i) in goodsList" :key="item.id">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getCarCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
      </div>
      <!-- 结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计(不含运费)</p>
              <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价:¥<span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
            </div>
            <mt-button type="danger">结算</mt-button>
					</div>
          
				</div>
			</div>
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
  data(){
    return {
      goodsList:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      var idArr=[];
      this.$store.state.car.forEach(item=>idArr.push(item.id));
      if(idArr.length<=0){
        return;
      }
      this.$http.get("http://vue.studyit.io/api/goods/getshopcarlist/"+idArr.join(',')).then(result=>{
        if(result.body.status===0){
          this.goodsList=result.body.message
        }
      })
    },
    remove(id,index){
      //点击删除，把商品从store中根据传递的id删除，同时把当前组件中的goodslist中对应要删除的那个商品，使用index删除
      this.goodsList.splice(index,1);
      this.$store.commit('removeFormCar',id);
    },
    selectedChanged(id,val){
      //商品选中，把状态同步到store中
      console.log(id+"---"+val);
      this.$store.commit('updataGoodsSelected',{id,selected:val})
    }
  },
  components:{
    numbox
  }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
  background: #eee;
  overflow: hidden;
  .goods-list{
    .mui-card-content-inner{
      display: flex;
      align-items: center; 
    }
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size: 14px;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price{
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-item: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>


