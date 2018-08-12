<template>
  <div class="detailContainer">
    <div class="detailHeader">
      <span class="home"><i class="iconfont icon-shouye2"></i></span>
      <span class="title">网易严选</span>
      <span class="search"></span>
      <span class="shopCart"><i class="iconfont icon-gouwuchekong"></i></span>
    </div>
    <div class="detailContent">
     <!--轮播图部分-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
            <img :src="item.picUrl" alt="banner">
          </div>
        </div>
        <!--&lt;!&ndash; Add Pagination &ndash;&gt; 不需要指示器-->
        <!--<div class="swiper-pagination"></div>-->
      </div>

     <!--banner下面的scroll-->
      <div class="m-exploreChannels">
        <div class="scroll-wrap">
          <div class="scroll-item" v-for="(item,index) in detail.column">
            <div class="imgContainer">
              <img :src="item.picUrl" alt="">
            </div>
            <div class="rbGradient">
              <div class="topNum">{{item.articleCount}}</div>
            </div>
            <div class="title">{{item.title}}</div>
          </div>
        </div>
      </div>

     <!--推荐部分-->
     <Recommend />

    </div>
  </div>
</template>

<script>
import Recommend from '../../components/Recommend/Recommend'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['detail'])
  },
  mounted () {
    this.$store.dispatch('getDetailData')
  },
  watch: {
    detail () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', { //创建轮播图的swiper对象
          loop: true,
          spaceBetween: 10,
          slidesPerView: 1.1,
          centeredSlides: true
        })

        // 创建banner下面scroll的scroll对象
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true
        })
      })

    }
  },
  components: {
    Recommend
  }

}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.detailContainer
  width 100%
  height 100%
  .detailHeader
    position fixed
    top 0
    left 0
    width 100%
    height 0.88rem
    font-size 0
    background-color #faf7ff
    border-bottom 0.01rem solid #eee
    span
      height 0.88rem
      display inline-block
      line-height 0.88rem
      font-size 0.45rem
      vertical-align middle
      width 1rem
      text-align center
      .iconfont
        font-size 0.55rem
        font-weight lighter
      .icon-gouwuchekong
        text-align center
    .title
      text-align center
      width 4.5rem
    .search
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
      background-repeat no-repeat;
      background-size 0.45rem 0.45rem
      display inline-block
      width 1rem
      background-position 0.5rem 0.2rem
  .detailContent
    margin-top 1rem
    .swiper-container
      width 100%
      height 4rem
      .swiper-wrapper
        height 4rem
        .swiper-slide
          height 4rem
          width 7.5rem
          img
            height 4rem
            width 6.8rem
  .m-exploreChannels
    width 100%
    height 2.97rem
    display flex
    margin-top 0.5rem
    .scroll-wrap
        display flex
      .scroll-item
        width 1.64rem
        height 2rem
        margin-left 0.2rem
        position relative
        &:last-child
          margin-right 0.2rem
        .imgContainer
          width 100%
          img
            width 100%
        .rbGradient
          position absolute
          top 0
          right 0
          font-size 0.22rem
          height 0.3rem
          text-align center
          padding 0.02rem
          color #fff
          background-color rgba(0, 0, 0, 0.2)
        .title
          font-size 0.26rem
          text-align center
          margin-top 0.15rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          color #333
</style>
