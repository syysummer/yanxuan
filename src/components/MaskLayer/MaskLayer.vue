<template>
  <div class="masklayer" v-if="isShow">
    <div class="close" @click="isShow = false">
      <span>X</span>
    </div>
    <div class="gift">
      <div class="title">
        <i>- 新人专享 -</i>
      </div>
      <div class="description">感谢使用网易严选,已为你准备了一份专享礼</div>
      <div class="good">
        <img src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&quality=85&thumbnail=232y232" alt="礼物图片">
        <div class="good_detail">
          <span class="good_name">花样年华女士小白鞋</span>
          <span class="good_label"><i>舒适透气,时尚经典</i></span>
          <div class="good_price">
            <span class="price_now">
                ¥259
            </span>&nbsp;
            <span class="price_old">
                ¥259
              </span>
          </div>
        </div>
      </div>
      <mt-button class="mtBotton1 mtBotton">领券立减¥60</mt-button>
      <mt-button class="mtBotton">查看更多优惠商品</mt-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isShow: true
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .masklayer
    width 100%
    height 100%
    position absolute
    background-color rgba(0, 0, 0, 0.4)
    z-index 1000
    .close
      width 0.6rem
      height 0.6rem
      float right
      margin 0.2rem
      border 0.02rem solid #ccc
      color #ccc
      border-radius 50%
      text-align center
      line-height 0.6rem
    .gift
      width 86%
      position absolute
      top 2rem
      margin 7%
      display flex
      flex-direction column
      background-color white
      padding-bottom 0.3rem
      .title
        font-size 0.4rem;
        text-align center
        height 1.2rem
        line-height 1.2rem
      .description
        font-size 0.32rem
        text-align center
        height 0.4rem
        line-height 0.4rem
      .good
        width 94%
        margin 3%
        background-color #eee
        height 2.4rem
        display flex
        img
          height 100%
        .good_detail
          display flex
          font-size 0.32rem
          padding 0.6rem 0.2rem
          flex-direction column
          .good_label
            display block
            padding 0.06rem
            width 2.4rem
            font-size 0.28rem
            margin 0.2rem 0
            border 0.01rem solid #666
            background-color white
          .good_price
            font-size 0.32rem
            .price_now
              color #b4282d
            .price_old
              color #666
              text-decoration line-through
      .mtBotton
        height 0.8rem
        width 94%
        margin 0.2rem
        border 0 solid #000
        font-size 0.32rem
        font-weight bold
        border-radius 0.05rem
      .mtBotton1
        background-color #b4282d
        color white
</style>
