import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../view/home/home.vue')
const kind = () => import('../view/kind/kind.vue')
const shop = () => import('../view/shop/shop.vue')
const profile = () => import('../view/profile/profile.vue')
const detail = () => import('../view/detail/detail.vue')
Vue.use(VueRouter)

//创建路由
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/kind',
    component:kind
  },
  {
    path:'/shop',
    component:shop
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail',
    component:detail
  }
]

//创建路由器实例
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
