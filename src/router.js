import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Detail from './components/news/detail.vue'
import Share from './components/photo/share.vue'
import GoodList from './components/goods/GoodList.vue'
import PhotoInfo from './components/photo/photoinfo.vue'

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newslist/:id?',component:Detail},
        {path:'/home/share',component:Share},
        {path:'/home/photoinfo/:id?',component:PhotoInfo},
        {path:'/home/goodlist',component:GoodList},
    ],
    linkActiveClass:'mui-active'//覆盖默认的高亮类
})

export default router