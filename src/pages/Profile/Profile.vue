<template>
  <div class="profileContainer">
    <HeaderTop />
    <div class="profile" v-show="isProfileShow">
    <div class="logoImg">
      <img  src="../../common/imgs/logo.png" alt="">
    </div>
    <!--登录部分-->
    <div class="login">
      <mt-button class="phone" @click="toPhoneLogin">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </mt-button>
      <mt-button class="mail" @click="toMailLogin">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </mt-button>
      <div class="phoneLogin">
        <span>手机快速注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <!--底部footer部分-->
    <div class="mediaFooter">
      <span><i class="iconfont icon-weixin"></i>微信</span>
      <span><i class="iconfont icon-QQ"></i>QQ</span>
      <span><i class="iconfont icon-weibo"></i>微博</span>
    </div>
    </div>

    <!--手机登录-->
    <LoginPhone v-show="isLoginPhoneShow" @otherLoginWay = 'otherLoginWay' ref="phone"/>

    <!--邮箱登录-->
    <LoginMail v-show="isLoginMailShow" @otherLoginWay = 'otherLoginWay' ref="mail"/>

  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import LoginPhone from '../LoginPhone/LoginPhone'
import LoginMail from '../LoginMail/LoginMail'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      isProfileShow: true,
      isLoginPhoneShow: false,
      isLoginMailShow: false
    }
  },
  computed: {
    ...mapState(['loginPath'])
  },
  beforeRouteEnter (to, from, next) {
    next( component =>  {
      if(component.loginPath === '/profile/0'){
        // 此处可以处理判断是否登录的逻辑
      }
      component.isProfileShow = true
      component.isLoginPhoneShow = false
      component.isLoginMailShow = false
    })
  },
  mounted () {
      this.isProfileShow = true
      this.isLoginPhoneShow = false
      this.isLoginMailShow = false
  },
  components: {
    HeaderTop,
    LoginPhone,
    LoginMail
  },
  methods: {
    toPhoneLogin () {
      this.isProfileShow = false
      this.isLoginPhoneShow = true
      this.isLoginMailShow = false
    },
    toMailLogin () {
      this.isProfileShow = false
      this.isLoginPhoneShow = false
      this.isLoginMailShow = true
    },
    otherLoginWay () {
      this.isProfileShow = true
      this.isLoginPhoneShow = false
      this.isLoginMailShow = false
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.profileContainer
  width 100%
  background-color #eee
  height 100%
  position relative
  text-align center
  overflow hidden
  .logoImg
    position absolute
    top 2.5rem
    width 100%
    height 0.9rem
    text-align center
    img
      width 2.8rem
  .login
    width 100%
    position absolute
    top 5.5rem
    .iconfont
      font-size 0.4rem
    .phone
      width 92%
      background-color #b4282d
      color #efefef
      height 0.9rem
      font-size 0.28rem
      vertical-align middle
    .mail
      width 92%
      color #b4282d
      height 0.9rem
      border 0.02rem solid #b4282d
      background-color #eee
      margin-top 0.35rem
      font-size 0.28rem
      .icon-youxiang
        position relative
        top 0.01rem

    .phoneLogin
      width 94%
      margin-top 0.4rem
      font-size 0.28rem
      .icon-jiantouyou
        font-size 0.26rem
        color #888

  .mediaFooter
    position absolute
    bottom 0.8rem
    width 100%
    text-align center
    span
      display inline-block
      padding-right 0.15rem
      padding-left 0.15rem
      border-right 0.02rem solid #888
      color #888
      &:last-child
        border none
</style>
