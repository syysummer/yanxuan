<template>
  <div class="homeContainer">
      <MaskLayer />
    <!--主页头部-->
    <div class="homeHeader">
      <span class="title">网易严选</span>
      <div class="search">
        <input type="text">
        <span>搜索商品,共9771款好物</span>
      </div>
    </div>
    <!--顶部导航条部分-->
    <div class="nav_wrap" ref="headerNav">
    <ul class="menu">
      <li class="item" @click='control(index)' v-for="(cateItem, index) in cateListData" :key="index">
        <span :class="{active: currentIndex === index}">{{cateItem.name}}</span>
      </li>
    </ul>
    </div>
    <div class="content_container" ref="contentContainer">
    <!--主要内容区-->
    <div class="content_wrap">
    <!--轮播图部分-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus, index) in focusList" :key="index">
          <img :src="focus.picUrl" alt="banner">
        </div>
      </div>
      <!--&lt;!&ndash; Add Pagination &ndash;&gt;-->
      <div class="swiper-pagination"></div>
    </div>

    <!--轮播图下面部分-->
    <div class="to_grow">
      <div class="item" v-for="(item,index) in home.policyDescList" :key="index">
        <img :src="item.icon">
        <span>{{item.desc}}</span>
      </div>
    </div>

    <!--indexFloor部分-->
    <div class="m-indexFloor">
        <div class="hd">
          <div class="hd-Wrap">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="hd-itemWrap">
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
            <span>上新</span>
          </div>
          <div class="hd-item">
            <h4>Nine West制造商</h4>
            <div class="title">
              199元起
            </div>
            <span>上新</span>
          </div>
          <div class="hd-item">
            <h4>新秀丽制造商</h4>
            <div class="title">
              49元起
            </div>
            <span>上新</span>
          </div>
          <div class="hd-item">
            <h4>Birkenstock集团制造商</h4>
            <div class="title">
              89.9元起
            </div>
          </div>
        </div>
      </div>

    <!--新品发布部分-->
    <div class="m-newItems">
        <header class="newItemsWrap">
          <span>新品首发</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="m-goodGrid" ref="newGood">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
    </div>

    <!--人气推荐,好物精选-->
    <div class="m-indexFloor m-popularItemList">
        <header class="popularItemWrap">
          <span>人气推荐,好物精选</span>
          <div class="all">查看全部 ></div>
        </header>
        <div class="m-goodGrid" ref="popular">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in home.popularItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                限时购
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
      </div>

    <!--倒计时部分  -->
    <div class="m-indexFlash">
      <div class="computeTime">
        <div class="limitShop">严选限时购</div>
        <div class="timeWatch">
          <input type="text"  v-model="hour">
          <div>&nbsp; : &nbsp;</div>
          <input type="text"  v-model="minute">
          <div>&nbsp; : &nbsp;</div>
          <input type="text" v-model="second">
        </div>
        <div class="next">下一场14:00开始</div>
      </div>
      <div class="pic">
        <img src="http://yanxuan.nosdn.127.net/dc3ea0bf6df2e75dd9ec7fa8987be25a.png?imageView&quality=85&thumbnail=330x330" alt="">
        <div class="pic_price">
          <span>¥300</span>
          <span>¥399</span>
        </div>
      </div>
     </div>

    <!--福利社-->
    <div class="welfare">
      <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
    </div>

    <!--专题精选-->
    <div class="m-indexFloor m-indexTopics">
      <div class="hd">
        <div class="hd-Wrap">
          <span>专题精选</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
      <div class="m-indexTopics-slide" ref="indexTopics">
        <div class="indexTopics-wrap">
          <div class="hd-item" v-for="(item, index) in home.topicList" :key="index">
            <img :src="item.itemPicUrl" alt="">
            <div class="detail">
              <div class="decription">
                <div class="title">{{item.title}}</div>
                <div class="subTitle">{{item.subtitle}}</div>
              </div>
              <div class="price">{{item.priceInfo}}元起</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--好物列表-->
    <GoodsList :cateList = 'home.cateList'/>

    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MaskLayer from '../../components/MaskLayer/MaskLayer'
import GoodsList from '../../components/GoodsList/GoodsList'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      currentIndex: 0,
      hour: '',
      minute: '',
      second: ''
    }
  },
  computed: {
    ...mapState(['cateListData', 'focusList', 'home'])
  },
  mounted () {
    this.$store.dispatch('getCateList') // 获取顶部列表数据
    this.$store.dispatch('getBanner')  // 获取轮播图数据
    this.$store.dispatch('getHomeData') // 获取主页数据
    this._countDown ()
  },
  components: {
    MaskLayer,
    GoodsList
  },
  methods: {
    control(index) {
      this.currentIndex = index
    },
    _countDown(){
      let expiration = new Date('2018-8-13 00:00:00')
      setInterval(()=>{
        let date = new Date()
        let time = ( expiration - date ) / 1000
        let hours = parseInt((time / 3600))
        let minutes = parseInt((time - (hours * 3600)) / 60)
        let seconds = parseInt(time - ( hours * 3600 + minutes * 60))
        hours = hours < 10 ? ('0' + hours) : hours
        minutes = minutes < 10 ? ('0' + minutes) : minutes
        seconds = seconds < 10 ? ('0' + seconds) : seconds
        this.hour = hours
        this.minute = minutes
        this.second = seconds
      },500)
    },

  },
  watch: {
      cateListData() {
        this.$nextTick(() => { // 获取头部导航的相关内容
          new BScroll(this.$refs.headerNav, {
            click: true,
            scrollX: true
          })
        })
      },
      focusList() { // 获取轮播图的相关内容
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            // effect: 'fade', //可设置淡入淡出的效果
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      },
      home() {
        this.$nextTick(() => { // 获取头部导航的相关内容
          new BScroll(this.$refs.contentContainer, {
            click: true
          })
        })
        // 创建新品去水平滚动
        new BScroll(this.$refs.newGood, {
          click: true,
          scrollX: true
        })
        // 创建人气推荐的水平滚动
        new BScroll(this.$refs.popular, {
          click: true,
          scrollX: true
        })
        // 创建精选专区的水平滚动indexTopics
        new BScroll(this.$refs.indexTopics, {
          click: true,
          scrollX: true
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .homeContainer
    overflow hidden
    width 100%
    height 100%
    position relative
    &>.content_container
      margin-top 1.48rem
      height 11.18rem
    .homeHeader
      width 100%
      background-color white
      height 0.88rem
      position fixed
      top 0
      display flex
      z-index 50
      justify-content space-around
      line-height 0.88rem
      .title
        font-size 0.4rem
        font-family "Angsana New"
        margin-left 0.1rem
      .search
        height 100%
        width 5rem
        line-height 100%
        position relative
        input
          vertical-align middle
          margin-top 0.14rem
          border-radius 0.1rem
          text-align center
          width 5rem
          height 0.56rem
          background-color #eee
          outline none
        span
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat no-repeat;
          background-size 0.32rem 0.32rem
          background-position 0.1rem 0.1rem
          position absolute
          width 4.32rem
          height 0.56rem
          line-height 0.56rem
          top 0.14rem
          left 0.4rem
          text-align center
          color #666
    .nav_wrap
      width 100%
      position fixed
      background-color white
      top 0.88rem
      z-index 50
      heght 0.6rem
      overflow hidden
      display flex
      .menu
        white-space nowrap
        height 0.6rem
        display flex
        .item
          height 0.6rem
          padding 0.05rem
          margin-left 0.55rem
          span
            color #020202
            font-size 0.32rem
            padding 0.04rem
            &.active
              color #b4282d
              border-bottom 0.03rem solid #b4282d
    .content_wrap
      width 100%
      background-color #eeeeee
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
              width 100%
      .to_grow
        width 100%
        background-color #fff
        height 0.72rem
        display flex
        justify-content space-around
        align-items center
        .item
          height 0.32rem
          text-align center
        img
          width 0.32rem
          height 0.32rem
          vertical-align middle
        span
          font-size 0.26rem
          color #333
          line-height 0.42rem
          vertical-align middle
          margin-left 0.04rem
      .m-indexFloor
        margin-top 0.2rem
        background-color #fff
        .hd
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          height 1rem
          font-size 0.36rem
          .icon-jiantouyou
            border 0.02rem solid #888
            color #888
            border-radius 50%
            display inline-block
            width 0.36rem
            line-height 0.36rem
            text-align center
            font-size 0.28rem
            heigth 0.36rem
        .hd-itemWrap
          display flex
          justify-content space-evenly
          flex-flow row wrap
          .hd-item
            display inline-block
            width 42%
            height 2rem
            overflow hidden
            font-size 0.28rem
            background-color #f4f4f4
            padding 0.18rem
            margin-top 0.1rem
            &:nth-child(1)
              background-image url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png")
              background-size 100%
            &:nth-child(2)
              background-image url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png")
              background-size 100%
            &:nth-child(3)
              background-image url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png")
              background-size 100%
            &:nth-child(4)
              background-image url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png")
              background-size 100%
            h4
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              color #333
              font-size 0.28rem
              line-height 0.42rem
            span
              display block
              margin-top 0.1rem
              padding 0.05rem
              border 0.01rem solid #b7b17a
              width 0.7rem
              border-radius 0.03rem
              color #b7b17a
              text-align center

      .m-newItems
        padding-top 0.2rem
        background-color #fff
        height 7.72rem
        .newItemsWrap
          font-size 0.36rem
          background-image url('../../common/imgs/new.png')
          background-size 1rem 3.4rem
          height 2.6rem
          position relative
          span
            position absolute
            top 30%
            left 50%
            transform translateX(-50%)
            font-size 0.36rem
            color #8BA0B6
          #all
            position absolute
            top 50%
            left 50%
            transform translateX(-50%)
            font-size 0.32rem
            width 2.4rem
            height 0.56rem
            text-align center
            background-color #D8E5F1
            color #8BA0B6
            line-height 0.56rem
        .m-goodGrid
          margin-top 0.2rem
          height 3.2rem
          width 100%
          background-color #fff
          display flex
          .list
            display flex
            flex-flow row nowrap
            align-items center
            justify-content center
          .goodGrid-item
            margin-left 0.2rem
            width 2.8rem
            height 2.8rem
            .wraper
              width 2.8rem
              background-color #f4f4f4
              img
                width 100%
                background-size 100% 100%
            .title
              z-index 1
              margin-top 0.02rem
              margin-left 0.02rem
              height 0.36rem
              overflow hidden
              background-color #f48f18
              line-height 0.36rem
              text-align center
              color #fff
              font-size 0.2rem
              border-radius 0.03rem
              display inline-block
              vertical-align middle
            .name
              padding 0 0.02rem
              font-size 0.28rem
              line-height 0.42rem
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
              color #333
              text-align left
            .newItemDesc
              display block
              font-size 0.32rem
              color #7f7f7f
              line-height 0.4rem
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              padding 0.04rem
            .price
              padding 0.04rem
              font-size 0.28rem
              text-align left
              color #b4282d
      .m-popularItemList
        margin-top 0.2rem
        background-color #fff
        height 7.72rem
        .popularItemWrap
          font-size 0.36rem
          background-image url('../../common/imgs/hot.png')
          background-size 1rem 3.4rem
          height 2.6rem
          position relative
          span
            position absolute
            top 30%
            left 50%
            transform translateX(-50%)
            font-size 0.36rem
            color #ddcfa3
          .all
            position absolute
            top 50%
            left 50%
            transform translateX(-50%)
            font-size 0.32rem
            width 2.4rem
            height 0.56rem
            text-align center
            background-color #faedc6
            color #ddcfa3
            line-height 0.56rem
        .m-goodGrid
          margin-top 0.2rem
          height 3.2rem
          width 100%
          background-color #fff
          display flex
          .list
            display flex
            flex-flow row nowrap
            align-items center
            justify-content center
          .goodGrid-item
            margin-left 0.2rem
            width 2.8rem
            height 2.8rem
            .wraper
              width 2.8rem
              background-color #f4f4f4
              img
                width 100%
                background-size 100% 100%
            .title
              z-index 1
              margin-top 0.02rem
              margin-left 0.02rem
              height 0.36rem
              overflow hidden
              background-color #f48f18
              line-height 0.36rem
              text-align center
              color #fff
              font-size 0.2rem
              border-radius 0.03rem
              display inline-block
              vertical-align middle
            .name
              padding 0 0.02rem
              font-size 0.28rem
              line-height 0.42rem
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
              color #333
              text-align left
            .newItemDesc
              display block
              font-size 0.32rem
              color #7f7f7f
              line-height 0.4rem
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              padding 0.04rem
            .price
              padding 0.04rem
              font-size 0.28rem
              text-align left
              color #b4282d
      .m-indexFlash
        margin-top 0.2rem
        box-sizing border-box
        width 100%
        height 3.8rem
        background-color #fff
        display flex
        flex-flow row nowrap
        padding 0.3rem
        justify-content space-around
        .computeTime
          display flex
          flex-direction column
          align-items center
          box-sizing border-box
          padding-top 0.5rem
          width 3.4rem
          height 3.2rem
          .limitShop
            word-spacing 0.32rem
            font-size 0.32rem
          .timeWatch
            display flex
            flex-flow row nowrap
            margin-top 0.3rem
            margin-bottom 0.3rem
            input
              box-sizing border-box
              padding-left 0.15rem
              width 0.62rem
              height 0.56rem
              vertical-align middle
              background-color #444
              color #fff
            div
              height 0.56rem
              line-height 0.56rem
          .next
            word-spacing 0.26rem
            font-size 0.26rem
        .pic
          width 3.2rem
          height 3.2rem
          position relative
          img
            width 3.2rem
            height 3.2rem
          .pic_price
            width 0.96rem
            height 0.96rem
            border-radius 50%
            background-color rgba(244,143,24,.95)
            color #fff
            font-size 0.26rem
            text-align center
            position absolute
            right 0.6rem
            bottom 0.6rem
            display flex
            flex-direction column
            justify-content center

      .welfare
        width 100%
        height 3rem
        margin-top 0.2rem
        img
          width 100%
          height 100%
      .m-indexTopics-slide
        width 100%
        height 4.3rem
        display flex
        .indexTopics-wrap
          display flex
          height 100%
          .hd-item
            display flex
            flex-direction column
            margin-left 0.2rem
            img
              width 5.73rem
              height 3.22rem
            .detail
              display flex
              justify-content space-between
              .title
                font-size 0.30rem
                margin 0.06rem 0 0.08rem 0.03rem
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
              .subTitle
                font-size 0.26rem
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #666

              .price
                font-size 0.32rem
                color #b4282d
                margin-top 0.06rem
</style>
