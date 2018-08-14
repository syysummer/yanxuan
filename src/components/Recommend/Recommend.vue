<template>
  <div>
  <div class="recommend" v-if="recommend">
    <!--顶部推荐部分-->
    <h3 class="title" v-if="recommend.name">{{recommend.name}}</h3>
    <div class="item_recommend_one">
      <a href="javascript:;">
        <img :src="recommend.Item[0].picUrl" alt="">
        <div class="info">
          <div class="desc">
            <div class="desc_title">{{recommend.Item[0].title}}</div>
            <div class="price">{{recommend.Item[0].priceInfo}}元起</div>
          </div>
          <div class="subDesc">{{recommend.Item[0].subTitle}}</div>
        </div>
      </a>
    </div>
    <!--推荐items-->
    <RecommentItem :recommend="recommend"/>
  </div>
  </div>
</template>

<script>
import RecommentItem from '../RecommentItem/RecommentItem'
export default {
  props: {
    detail: Object,
    recommendLabel: String
  },
  computed: {
    recommend () {
      return this.detail[this.recommendLabel]
    }
  },
  components: {
    RecommentItem
  }

}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.recommend
  padding-top 0.2rem
  .title
    font-size 0.28rem
    line-height 1.2rem
    text-align center
    color #333
  .item_recommend_one
    position relative
    color #333
    box-sizing border-box
    margin 0.2rem
    border 0.01rem solid #d9d9d9
    border-radius 0.08rem
    overflow hidden
    text-align center
    img
      height 3.86rem
      border-radius 0.08rem 0.08rem 0 0
    .info
      box-sizing border-box
      padding 0.3rem 0.2rem 0.3rem
      color #333
      .desc
        display flex
        justify-content space-between
        align-items center
        line-height 1.2rem
        height 0.43rem
        .desc_title
          flex 1
          margin-right 1.7rem
          font-size 0.36rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .price
          line-height 1
          font-size 0.32rem
          text-align center
          min-width 1.15rem
      .subDesc
        font-size 0.28rem
        padding-left 0.3rem
        color #7f7f7f
        line-height 1.2rem
        text-align left
        white-space nowrap
        overflow hidden
        text-overflow ellipsis

</style>
