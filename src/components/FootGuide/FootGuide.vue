<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goTo('/home')" :class="{on: $route.path === '/home'}">
    <span class="item_icon">
      <i class="iconfont icon-shouye2"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/detail')" :class="{on: $route.path === '/detail'}">
    <span class="item_icon">
      <i class="iconfont icon-fangkuai"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/nav')" :class="{on: $route.path === '/nav'}">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopcart')" :class="{on: $route.path === '/shopcart'}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuchekong"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path === '/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-icon-"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 0.98rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.1rem
      color #999999
      &.on
        color #b4282d
      span
        font-size 0.24rem
        margin-top 0.04rem
        margin-bottom 0.04rem
        .iconfont
          font-size 0.44rem
</style>
