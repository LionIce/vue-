import Vue from 'vue'
//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入mint-ui中的组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入路由模块
import router from './router.js'
//导入app根组件
import app from './App.vue'
new Vue({
    el:'#app',
    render:c=>c(app),
    router
})