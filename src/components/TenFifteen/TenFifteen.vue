<template>
    <div class="topicShow">
      <h3 class="title">十点一刻</h3>
      <div class="showSwiper" ref="mySwiper">
        <ul class="swiperWrap">
          <li class='item contentItem' v-for="(item,index) in tenFifteenData" :key="item.id" v-if="index < 1">
            <a href="javascript:;">
              <div class="lineTitle">
                <span class="inner">今日话题</span>
              </div>
              <div class="tsTitle">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="joinInfo">{{item.participantNum}}人参与话题</div>
            </a>
          </li>
          <li class='item lastItem' >
            <a href="javascript:;">
              <div class="move">
                <span>查看全部话题</span>
                <i class="iconfont icon-jiantouyou"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    tenFifteenData: Array
  },
  watch: {
    tenFifteenData() {
      this.$nextTick(() => {
        // 创建十点一刻的scroll对象
        new BScroll(this.$refs.mySwiper, {
          click: true,
          scrollX: true
        })
      })
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.topicShow
  padding-top 0.2rem
  width 100%
  .title
    font-size 0.28rem
    line-height 1.2rem
    text-align center
    color #333
  .showSwiper
    width 100%
    display flex
    .swiperWrap
      display flex
      flex-flow row nowrap
      padding-bottom 0.4rem
      .contentItem
        background-image url('../../common/imgs/qipao.png')
        background-size 5.8rem 4.14rem
      .item
        height 4.14rem
        width 5.8rem
        margin-left 0.2rem
        a
          position relative
          display block
          width 100%
          height 4.12rem
          padding 0.38rem 0.4rem 0.8rem
          box-sizing border-box
          text-align center
          color #333
          .lineTitle
            display flex
            align-items center
            justify-content center
            margin-bottom 0.28rem
            &:before
              content ''
              display block
              width 0.24rem
              height 0.01rem
              background-color #7f7f7f
            &:after
              content ''
              display block
              width px2rem(24)
              height 1px
              background-color #7f7f7f
            span
              margin 0 0.08rem
              font-size 0.24rem
              color #7f7f7f
          .tsTitle
            font-size 0.36rem
            font-weight 700
            margin-top 0.6rem
            margin-bottom 0.14rem
          .desc
            font-size 0.28rem
            margin-top 0.2rem
            margin-bottom 0.14rem
            ellipsis()
          .joinInfo
            position absolute
            left 50%
            transform translateX(-50%)
            bottom 0.78rem
            width 5rem
            height 0.48rem
            font-size 0.24rem
            text-align center
      .lastItem
        border 0.1rem solid #dedede
        box-sizing border-box
        height 3.9rem
        .move
          height 3.9rem
          line-height 3rem
          .icon-jiantouyou
            border 0.02rem solid #888
            color #888
            border-radius 50%
            display inline-block
            width 0.32rem
            line-height 0.32rem
            margin-left 0.1rem
            margin-top -0.1rem
            text-align center
            font-size 0.26rem
            heigth 0.32rem
</style>
