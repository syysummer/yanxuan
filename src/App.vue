<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FootGuide v-show="$route.meta.isFootShow"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
