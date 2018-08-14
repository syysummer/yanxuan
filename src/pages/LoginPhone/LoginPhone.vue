<template>
  <div class="loginPhone">
    <!--图片部分-->
    <div class="bgLogo">
      <img src="../../common/imgs/logo.png" alt="">
    </div>

    <!--登录信息部分-->
    <div class="personMsg">
      <div class="phone">
      <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="vertify">
      <input type="text" placeholder="请输入短信验证码" v-model="vertifyWord">
      <span>获取验证码</span>
      </div>
      <div class="issue">
        <span class="promble">遇到问题?</span>
        <span class="right">使用密码验证登录</span>
      </div>
    </div>
    <div class="toLogin">
      <mt-button class="phone" @click="login">
        <span>登录</span>
      </mt-button>
      <mt-button class="mail" @click="otherLoginWay">
        <span>其他登录方式</span>
      </mt-button>
      <div class="phoneLogin">
        <span>注册账号</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      phone: '',
      vertifyWord: ''
    }
  },
  methods: {
    otherLoginWay () {
      this.$emit('otherLoginWay')
    },
    login () {
      let {phone, vertifyWord} = this
      let phoneReg = /^1[0-9]{10}$/
      let verReg = /^[0-9]{6,8}$/
      if(!phone){
        MessageBox.alert('账号不能为空', '错误提示');
        return
      }
      if(!vertifyWord){
        MessageBox.alert('验证码不能为空', '错误提示');
        return
      }
      if(!phoneReg.test(phone) || !verReg.test(vertifyWord)){
        this.phone = ''
        this.vertifyWord = ''
        MessageBox.alert('账号或验证码错误', '错误提示');
        return
      }
      Toast('登录成功')
      this.phone = ''
      this.vertifyWord = ''
      this.$router.replace('/home')
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginPhone
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
    .phone
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
    .vertify
      width 86%
      height 0.6rem
      text-align left
      padding 0.4rem 0 0.1rem 0.1rem
      border-bottom 0.01rem solid #ddd
      line-height 0.5rem
      position relative
      input
        margin-left 0.2rem
        height 0.5rem
        width 4rem
        line-height 0.5rem
        vertical-align middle
        outline none
      span
        position absoulte
        right 0.2rem
        top 1rem
        width 3rem
        height 0.6rem
        padding 0.05rem
        border 0.01rem solid #bdbdbd
        border-radius 0.03rem
        color #666
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
    .phoneLogin
      width 94%
      margin-top 0.4rem
      font-size 0.28rem
      .icon-jiantouyou
        font-size 0.26rem
        color #888

</style>
