<template>
  <div ref="listWrap" class="outerwrap">
   <div class="listContentWrap" v-if="category">
    <div class="banner">
      <img :src="category.bannerUrl" alt="">
    </div>
    <div class="title">
      <span>{{category.name}}</span>
      <div class="line"></div>
    </div>
    <div class="innerList">
      <ul class="listUl">
        <li class="item" v-for="(subCate, index) in category.subCateList" :key="index">
          <img :src="subCate.wapBannerUrl" alt="">
          <span>{{subCate.name}}</span>
        </li>
        <li class="item"></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    category: Object
  },
  watch: {
    category () {
      this.$nextTick(() => {
        this.$nextTick(() => { // 创建分类列表的scroll对象
          new BScroll(this.$refs.listWrap, {
            click: true
          })
        })
      })
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.listContentWrap
  width 100%
 .outerwrap
    height 12rem
  .banner
    width 5.28rem
    height 1.92rem
    img
      width 100%
      height 100%
  .title
    width 5.28rem
    height 1.08rem
    position relative
    span
      padding 0.1rem
      position absolute
      top 50%
      left 50%
      z-index 3
      transform translate(-50%, -50%)
      background-color #fff
    .line
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      height 0.01rem
      width 3rem
      background-color #efefef
      z-index 0

  .innerList
    width 100%
    .listUl
      width 100%
      display flex
      flex-flow row wrap
      justify-content space-between
      .item
        width 1.44rem
        height 2.16rem
        text-align center
        img
          width 1.44rem
          height 1.44rem
        span
          font-size 0.24rem
          color #333
          ellipsis()
</style>
