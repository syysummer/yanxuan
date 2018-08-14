<template>
  <div class="loginMail">
    <!--图片部分-->
    <div class="bgLogo">
      <img src="../../common/imgs/logo.png" alt="">
    </div>

    <!--登录信息部分-->
    <div class="personMsg">
      <div class="mail">
        <input type="text" placeholder="邮箱账号" v-model="mail">
      </div>
      <div class="pwd">
        <input type="password" placeholder="密码" v-model="pwd">
      </div>
      <div class="issue">
        <span class="promble">注册账号</span>
        <span class="right">忘记密码</span>
      </div>
    </div>

    <div class="toLogin">
      <mt-button class="phone" @click="login">
        <span>登录</span>
      </mt-button>
      <mt-button class="mail" @click="otherLoginWay">
        <span>其他登录方式</span>
      </mt-button>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
import {mapState} from 'vuex'
export default {
  data () {
   return {
     mail: '',
     pwd: ''
   }
  },
  computed: {
    ...mapState(['loginPath'])
  },
  methods: {
    otherLoginWay () {
      this.$emit('otherLoginWay')
    },
    login () {
      let {mail, pwd} = this
      let mailReg = /^[a-z0-9A-Z_]{3,12}@[a-z0-9A-Z_]{2,6}\.(com|cn|net)$/
      let pwdReg = /^[a-z0-9A-Z]{6,8}$/
      if(!mail){
        MessageBox.alert('邮箱账号不能为空', '错误提示');
        return
      }
      if(!pwd){
        MessageBox.alert('密码不能为空', '错误提示');
        return
      }
      if(!mailReg.test(mail) || !pwdReg.test(pwd)){
        console.log(mailReg.test(mail))
        console.log(pwdReg.test(pwd))
        this.mail = ''
        this.pwd = ''
        MessageBox.alert('账号或密码错误', '错误提示');
        return
      }
      Toast('登录成功')
      this.mail = ''
      this.pwd = ''
      this.$store.dispatch('updatePath', '/profile/1')
      this.$router.replace('/home')
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginMail
    height 100%
    width 100%
    background-color #fff
    position relative
    .bgLogo
      position absolute
      top 1.5rem
      width 100%
      height 0.6rem
      text-align center
      img
        height 0.6rem
    .personMsg
      position absolute
      top 3rem
      display flex
      width 7.5rem
      flex-direction column
      justify-content center
      align-items center
      .mail
        width 86%
        height 0.6rem
        text-align left
        padding 0.05rem
        border-bottom 0.01rem solid #ddd
        line-height 0.5rem
        input
          margin-left 0.2rem
          height 0.5rem
          width 5rem
          line-height 0.5rem
          vertical-align middle
          outline none
      .pwd
        width 86%
        height 0.6rem
        text-align left
        padding 0.4rem 0 0.1rem 0.1rem
        border-bottom 0.01rem solid #ddd
        line-height 0.5rem
        input
          margin-left 0.2rem
          height 0.5rem
          width 4rem
          line-height 0.5rem
          vertical-align middle
          outline none
      .issue
        width 86%
        margin-top 0.2rem
        height 0.6rem
        text-align left
        padding 0.05rem
        line-height 0.5rem
        color #666
        font-size 0.26rem
        .promble
          margin-left 0.2rem
        .right
          float right
          margin-right 0.3rem
    .toLogin
      width 86%
      position absolute
      left 50%
      transform translateX(-50%)
      justify-content center
      align-items center
      top 5.8rem
      .iconfont
        font-size 0.4rem
      .phone
        width 100%
        background-color #b4282d
        color #efefef
        height 0.8rem
        font-size 0.28rem
        vertical-align middle
      .mail
        width 100%
        color #b4282d
        height 0.8rem
        border 0.02rem solid #b4282d
        background-color transparent
        margin-top 0.35rem
        font-size 0.28rem
        .icon-youxiang
          position relative
          top 0.01rem
</style>

