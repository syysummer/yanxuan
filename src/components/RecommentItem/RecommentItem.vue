<template>
  <div v-if="recommend">
    <div class="items" v-for="(item, index) in recommend.Item" :key="index" v-if="index > 0">
      <div class="topicInfo">
        <div class="desc">
          <div class="topicTitle">{{item.title}}</div>
        </div>
        <div class="subDesc">
          <div class="cont">{{item.subTitle}}</div>
        </div>
      </div>
      <div class="topicPic">
        <img :src="item.picUrl" alt="">
        <div class="topicTag">
          <div class="tag">{{item.typeName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend: Object
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .items
    display flex
    background #fff
    color #333
    margin 0.2rem
    border 0.02rem solid #d9d9d9
    box-sizing border-box
    border-radius 0.04rem
    .topicInfo
      flex 1
      display flex
      flex-direction column
      justify-content center
      overflow hidden
      position relative
      padding-left 0.2rem
      padding-right 0.3rem
      .desc
        font-size 0.32rem
        box-sizing border-box
        >.topicTitle
          height 0.38rem
          ellipsis()
          font-size 0.32rem
          margin-right 0.3rem
          width 2.72rem
      .subDesc
        .cont
          font-size 0.24rem
          margin-top 0.2rem
          width 2.72rem
          color #7f7f7f
          ellipsis()
    .topicPic
      position relative
      width 2.8rem
      height 2.72rem
      overflow hidden
      img
        width 100%
        height 100%
      >.topicTag
        position absolute
        top 0.1rem
        left 0.1rem
        height 0.36rem
        font-size 0
        >.tag
          display inline-block
          padding 0 0.16rem
          height 0.34rem
          font-size 0.24rem
          line-height 0.34rem
          border 1px solid #d9d9d9
          border-radius 0.2rem
          color #333
          background-color rgba(255,255,255,.9)
</style>
