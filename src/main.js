import Vue from 'vue'
//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//支持vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//初始化购物车商品数据
var car=JSON.parse(localStorage.getItem('car')||'[]');
var store=new Vuex.Store({
    state:{//this.$store.state.***
        car:car
    },
    mutations:{//this.$store.commit('方法名','唯一参数')
        
        addToCar(state,goodsInfo){
            var flag=false//假设没有找到对应的商品
            state.car.some(item=>{
                if(item.id==goodsInfo.id){
                    item.count+=parseInt(goodsInfo.count)
                    item.price=goodsInfo.price
                    flag=true
                    return true
                    console.log(goodsInfo)
                }
            })
            if(!flag){
                state.car.push(goodsInfo);
            }
            //localstorage
          localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中商品的数量
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            //根据id，从store中的购物车中删除对应的那条商品数据
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updataGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{//this.$store.getters.***
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count;
            })
            return c;
        },
        getCarCount(state){//购物车页面numbox值
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.count
            })
            return o;
        },
        getGoodsSelected(state){
            //购物车开关状态
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            //购物车勾选的数量价格计算
            var o={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count;
                    o.amount+=item.price*item.count;
                    console.log(item.price)
                }
            })
            return o
        }
    }
})


//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入mint-ui中的组件
// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//导入时间格式化插件
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})
//导入路由模块
import router from './router.js'
//导入app根组件
import app from './App.vue'
new Vue({
    el:'#app',
    render:c=>c(app),
    router,
    store
})