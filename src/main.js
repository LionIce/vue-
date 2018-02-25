import Vue from 'vue'


//导入mui样式
import './lib/mui/css/mui.min.css'
//按需导入mint-ui中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//导入app根组件
import app from './App.vue'
new Vue({
    el:'#app',
    render:c=>c(app)
})