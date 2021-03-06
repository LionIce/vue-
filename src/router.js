import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Detail from './components/news/detail.vue'
import Share from './components/photo/share.vue'
import PhotoInfo from './components/photo/photoinfo.vue'
import GoodList from './components/goods/GoodList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

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
        {path:'/home/goodsinfo/:id?',component:GoodsInfo},
        {path:'/home/gooodsdesc/:id?',component:GoodsDesc},
        {path:'/home/goodscomment/:id?',component:GoodsComment},
    ],
    linkActiveClass:'mui-active'//覆盖默认的高亮类
})

export default router