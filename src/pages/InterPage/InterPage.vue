<template>
    <div class="interPage">
      <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="inter">
      <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="inter">
      <img @click="gotoMask" src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="inter">
    </div>
</template>
<script>
export default {
 methods: {
   gotoMask () {
    this.$router.replace('/home')
   }
 }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .interPage
    width 100%
    height 100%
    background-color #eee
    overflow hidden
    padding-top 1.7rem
    box-sizing border-box
    img
      width 100%
</style>
