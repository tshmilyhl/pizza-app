import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Admin from "../components/Admin";
import About from "../components/about/About";
import Login from "../components/Login";
import Register from "../components/Register";
//二级路由
import Contact from "../components/about/Contact";
import Delivery from "../components/about/Delivery";
import History from "../components/about/History";
import OrderingGuide from "../components/about/OrderingGuide";
//三级路由
import Phone from "../components/about/contact/Phone";
import PersonName from "../components/about/contact/PersonName";



Vue.use(VueRouter)

//配置路由
const routes = [
  {path:'/',name:'homeLink',components: {
    default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin,
    //路由独享守卫
    // beforeEnter:(to,from ,next)=>{
    // alert("飞登录页面，不能访问此页面")
    // }
    },
  {path:'/about'
    ,name:'aboutLink'
    ,component:About,
    redirect: '/about/contact',
    children:[
      {
        path:'/about/contact',
        name:'contactLink',component:Contact,
        redirect:'/personname',
        children:[
          {
            path:'/phone',name:'phoneNumber',component:Phone
          },
          {
            path:'/personname',name:'personName',component:PersonName
          }
        ]
      },
      {
        path:'/history',
        name:'historyLink',component:History
      },
      {
        path:'/delivery',
        name:'deliveryLink',component:Delivery
      },
      {
        path:'/orderingGuide',
        name:'orderingGuideLink',component:OrderingGuide
      }
    ]
  },
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return { x:0,y:100}
    return {selector:'.btn'}
  }
})
//全局守卫
// router.beforeEach((to,from,next)=>{
//  if(to.path=='/login' || to.path=='/register'){
//    next()
//  }else{
//    alert("还没有登录，请先登录");
//    next("/login")
//  }
// })
export default router
