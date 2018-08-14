<template>
  <div>
  <div class="m-indexFloor" v-for="(cate, index) in cateList" :key="index">
    <div class="m-titleGoodGrid">
      <h3 class="title">{{cate.name}}</h3>
    </div>
    <ul class="good_list">
      <li class="item" v-for="(cateItem, index) in cate.itemList" v-if="index <= 6" :key="index">
        <div class="hd_wraper">
            <img v-lazy="cateItem.primaryPicUrl" alt="">
            <div class="desc">{{cateItem.simpleDesc}}</div>
        </div>
        <div class="tagWraper">
          <p class="status gradientPrice">{{cateItem.promTag}}</p>
        <div class="name">
           <span>{{cateItem.name}}</span>
        </div>
         <div class="price">
           <span>¥{{cateItem.retailPrice}}</span>
         </div>
        </div>
      </li>
      <li class="item">
        <a href="javascript:;" class="hd_wraper">
          <p class="lastName">更多{{cate.name}}好物</p>
          <i></i>
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>

  export default {
    props: {
      cateList: Array
    },
    mounted() {

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.m-indexFloor
  margin-top 0.2rem
  background-color #fff
  .m-titleGoodGrid
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    height 1rem
    font-size 0.30rem
  .good_list
    width 100%
    display flex
    flex-flow row wrap
    justify-content space-evenly
    .item
      width 3.45rem
      height 5.87rem
      box-sizing border-box
      .hd_wraper
        width 100%
        height 4.14rem
        background-color #f4f4f4
        display flex
        flex-direction column
        position relative
        .lastName
          position absolute
          color #333
          top 30%
          font-size 0.32rem
          left 25%
          transform -50%
        i
          display block
          background url(../../common/imgs/gsmove.png)
          vertical-align middle
          background-repeat no-repeat
          background-size 100% 100%
          width 0.66rem
          position absolute
          top 45%
          left 40%
          transform -50%
          height 0.66rem !important
        img
          width 100%
        .desc
          width 100%
          text-align center
          color #9F8A60
          font-size 0.26rem
          background-color #F1ECE2
          height 0.69rem
          line-height 0.69rem
          ellipsis()
      .tagWraper
        .status
          z-index 1
          margin-top 0.1rem
          margin-left 0.1rem
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
        font-size 0.26rem
        display inline-block
        width 80%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        color #222
        margin-top 0.1rem
        margin-bottom 0.1rem
      .price
        color #b4282d
</style>
