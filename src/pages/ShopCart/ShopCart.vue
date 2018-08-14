<template>
  <div class="shopcartContainer">
    <!--头部搜索部分-->
    <div class="cartHeader">
      <span>购物车</span>
      <span class="ticket">领券</span>
    </div>

    <!--售后服务部分-->
    <div class="afterServe">
      <div class="item">
        <span class="circle"></span>
        <span>30天无忧退货</span>
      </div>
      <div class="item">
        <span class="circle"></span>
        <span>48小时快速退款</span>
      </div>
      <div class="item">
        <span class="circle"></span>
        <span>满88元免邮费</span>
      </div>
    </div>

    <!--购物车图片部分-->
    <div class="cartImg">
      <img src="../../common/imgs/cart.png" alt="">
      <span>去添加点什么吧</span>
    </div>
    <mt-button class="login" @click="$router.replace('/profile/0')">登录</mt-button>

  </div>
</template>

<script>

export default {

}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcartContainer
  width 100%
  height 100%
  background-color #eee
  .cartHeader
    height 0.88rem
    position relative
    text-align center
    line-height 0.88rem
    background-color #fff
    font-size 0.36rem
    .ticket
      position absolute
      right 0.6rem
      font-size 0.28rem
      color #b4282d
  .afterServe
    height 0.7rem
    display flex
    flex-flow row nowrap
    line-height 0.7rem
    justify-content space-around
    span
      font-size 0.26rem
      color #333
    .circle
      display inline-block
      width 0.06rem
      height 0.06rem
      border-radius 50%
      border 0.01rem solid #333
      vertical-align middle

  .cartImg
    width 2.48rem
    height 2.78rem
    position absolute
    top 45%
    left 50%
    transform translate(-50%, -50%)
    img
      width 2.48rem
  .login
    position absolute
    width 5rem
    height 0.88rem
    background-color #b4282d
    color #efefef
    top 65%
    left 50%
    transform translate(-50%, -50%)

</style>
