<template>
  <div class="detailContainer">
    <!--头部-->
    <HeaderTop/>
    <div class="detailContent" ref="detailContent">
      <div class="innerContent">
        <!--轮播图部分-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
              <img v-lazy="item.picUrl" alt="banner">
              <div class="mask-content">
                <div class="subTitle">{{item.subTitle}}</div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
              </div>
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
                <img v-lazy="item.picUrl" alt="">
              </div>
              <div class="rbGradient">
                <div class="topNum">{{item.articleCount}}</div>
              </div>
              <div class="title">{{item.title}}</div>
            </div>
          </div>
        </div>

        <!--推荐部分-->
        <Split/>
        <Recommend :detail="detail" recommendLabel="recommend"/>
        <Recommend :detail="detail" recommendLabel="recommendOne"/>

        <!--十点一刻-->
        <TenFifteen :tenFifteenData='detail.tenfifteen'/>

        <!--严选甄品,采用Recommend组件-->
        <Split/>
        <Recommend :detail="detail" recommendLabel="zhen"/>

        <!--严选Look-->
        <Split/>
        <div class="look" v-if="detail.yxLook">
          <h3 class="title">严选LOOK</h3>
          <div class="wrap">
            <img :src="detail.yxLook.picUrl" class='mianImg' alt="">
            <div class="authorContainer">
              <div class="author">
                <div class="authorPic">
                  <img :src="detail.yxLook.avatar" alt="">
                </div>
                <div class="authorName">{{detail.yxLook.nickname}}</div>
              </div>
              <div class="desc">{{detail.yxLook.content}}</div>
            </div>
          </div>
        </div>

        <!--更多精彩-->
        <div class="findMore">
          <FindMore :data="detail.findMore"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import Recommend from '../../components/Recommend/Recommend'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import Split from '../../components/Split/Split'
  import TenFifteen from '../../components/TenFifteen/TenFifteen'
  import FindMore from '../../components/FindMore/FindMore'
  export default {
    computed: {
      ...mapState(['detail'])
    },
    mounted() {
      this.$store.dispatch('getDetailData')
    },
    watch: {
      detail() {
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

          // 创建整个页面滑动的scroll对象
          // 创建banner下面scroll的scroll对象
          new BScroll(this.$refs.detailContent, {
            click: true
          })

        })

      }
    },
    components: {
      Recommend,
      HeaderTop,
      Split,
      TenFifteen,
      FindMore
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detailContainer
    width 100%
    height 100%
    overflow hidden
    .detailContent
      margin-top 1rem
      height 11.8rem
      .innerContent
        .swiper-container
          background-color #fff
          width 100%
          height 4rem
          .swiper-wrapper
            height 4rem
            .swiper-slide
              height 4rem
              width 7.5rem
              position relative
              img
                height 4rem
                width 6.8rem
              .mask-content
                position absolute
                top 50%
                left 50%
                transform translate(-50%, -50%)
                display flex
                align-items center
                justify-content center
                flex-direction column
                width 4.66rem
                height 1.98rem
                background-color rgba(255, 255, 255, .9)
                .subTitle
                  position relative
                  font-size 0.2rem
                  color #7f7f7f
                  line-height 0.3rem
                  padding 0 0.08rem
                .title
                  font-size 0.32rem
                  font-weight bold
                  margin-top 0.2rem
                  color #333
                .desc
                  font-size 0.24rem
                  margin-top 0.2rem
                  color #333
    .m-exploreChannels
      width 100%
      height 2.5rem
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
    .look
      width 100%
      height 9.56rem
      box-sizing border-box
      .title
        font-size 0.28rem
        line-height 1.2rem
        text-align center
        color #333
      .wrap
        width 100%
        display flex
        flex-direction column
        .mianImg
          width 100%
          height 5.6rem
        .authorContainer
          width 100%
          height 274rem
          padding 0.2rem
          .author
            height 0.48rem
            display flex
            margin-bottom 0.3rem
            .authorPic
              width 0.46rem
              height 0.46rem
              margin-right 0.3rem
              vertical-align middle
              img
                width 100%
                height 100%
                border-radius 50%


            .authorName
              height 0.46rem
              line-height 0.46rem
          .desc
            width 6.9rem
            height 1.32rem
            font-size 0.28rem
            color #666

    .findMore
      width 100%
      background-color #eee
</style>
