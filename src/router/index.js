import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home' // 首页
import Detail from '../pages/Detail/Detail' // 实物
import Nav from '../pages/Nav/Nav' // 分类
import ShopCart from '../pages/ShopCart/ShopCart' // 购物车
import Profile from '../pages/Profile/Profile' // 个人

import InterPage from '../pages/InterPage/InterPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isFootShow: true
      }
    },
    {
      path: '/detail',
      component: Detail,
      meta: {
        isFootShow: true
      }
    },
    {
      path: '/nav',
      component: Nav,
      meta: {
        isFootShow: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        isFootShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isFootShow: true
      }
    },
    {
      path: '/interpage',
      component: InterPage,
      meta: {
        isFootShow: false
      }
    },
    {
      path: '/',
      redirect: '/detail',
    }
  ]
})
