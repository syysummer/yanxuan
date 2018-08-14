<template>
  <div class="login-page" >
    <div class="loginContainer">
      <div class="loginInner">
        <div class="login-header">
          <h2 class="login-logo">网易严选</h2>
          <div class="login-title">
            <a href="javascript:;" :class="{active: currentClass === 'message'}" @click="handler('message')">短信登录</a>
            <a href="javascript:;" :class="{active: currentClass === 'password'}"  @click="handler('password')">密码登录</a>
          </div>
        </div>
        <div class="login-content">
          <form>
            <!--短信登录-->
            <div :class="{active: currentClass === 'message'}">
              <div class="login-message">
                <input type="text" placeholder="手机号">
                <button disabled="disabled" class="get-verification">获取验证码</button>
              </div>
              <div class="login-verification">
                <input type="text" placeholder="验证码">
              </div>
              <div class="login-hint">
                温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </div>
            </div>

            <!--密码登录-->
            <div :class="{active: currentClass === 'password'}">
              <div class="login-message">
                <input type="text" placeholder="手机/邮箱/用户名">
              </div>
              <div class="login-verification password">
                <input ref='password' type="password" placeholder="密码">
                <div class="switch-button" @click="switchCase" :class="isPassword ? 'off' : 'on'">
                  <div class="switch-circle"></div>
                  <span class="switch-text">...</span>
                </div>
              </div>
            </div>

            <button class="login-submit">登录</button>
          </form>
          <a href="javascript:;" class="about-us">关于我们</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentClass: 'message',
      isPassword: true
    }
  },
  methods:{
    handler (msg) {
      this.currentClass = msg
    },
    switchCase () {
      this.isPassword = !this.isPassword
      let attr = this.isPassword ? 'password' : 'text'
      this.$refs.password.setAttribute('type', attr)
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-page
    &.active
    display block
    .login-header
      margin-top 1.5rem
      .login-logo
        font-size 0.48rem
        color #b4282d
        text-align center
        font-weight bold
      .login-title
        height 0.8rem
        text-align center
        line-height 0.8rem
        margin-top 0.3rem
        >a
          &.active
            color #b4282d
            border-bottom 0.04rem solid #b4282d
          color black
          font-size 0.36rem
          font-weight bold
          height 0.8rem
          line-height 0.8rem
          margin-right 0.16rem
          margin-left 0.16rem
    .login-content
      margin-top 0.2rem
      form
        >div
          display none
        &>div.active
          display block
        .login-message
          width 6.4rem
          height 1rem
          border-radius 0.06rem
          margin-left 0.5rem
          margin-right 0.5rem
          position relative
          input
            border 0.02rem solid #b4282d
            box-sizing border-box
            padding-left 0.2rem
            outline none
            width 100%
            height 100%
          button
            height 100%
            position absolute
            right 0.06rem
            top 0
            border 0
            background-color transparent
        .login-verification
          width 6.4rem
          height 1rem
          border-radius 0.06rem
          margin-left 0.5rem
          margin-right 0.5rem
          margin-top 0.2rem
          border 0.02rem solid #b4282d
          &.password
            margin-bottom 0.6rem
            position relative
            border 0.02rem solid #b4282d
            .switch-button
              position absolute
              right 0.4rem
              top 0.3rem
              heigh 0.3rem
              width 1rem
              border 0.02rem solid lightgray
              border-radius 0.3rem
              &.off
                background-color white
                .switch-circle
                  width 0.4rem
                  height 0.4rem
                  float left
                  transform translate3d(0rem,0rem,0rem)
                  border 0.02rem solid lightgray
                  border-radius 50%
                  transition transform 0.5s
                .switch-text
                  float right
                  line-height 0.4rem
                  color gray
                  padding-right 0.2rem
              &.on
                background-color #b4282d
                .switch-circle
                  width 0.4rem
                  float left
                  background-color #b4282d
                  height 0.4rem
                  transform translate3d(0.6rem,0rem,0rem)
                  border 0.02rem solid white
                  border-radius 50%
                  transition transform 0.5s
                .switch-text
                  float left
                  line-height 0.4rem
                  margin-left -0.32rem
                  color white
          input
            box-sizing border-box
            padding-left 0.2rem
            outline none
            width 100%
            height 100%
        .login-hint
          width 6.4rem
          margin 0.4rem auto
          line-height 0.5rem
          color gray
          a
            color #b4282d
        .login-submit
          width 6.4rem
          height 1rem
          border-radius 0.1rem
          margin-left 0.5rem
          margin-right 0.5rem
          margin-top 0.2rem
          background-color #b4282d
          font-size 0.36rem
          color white
          border 0
      .about-us
        display block
        width 6.4rem
        color gray
        margin 0.4rem auto
        text-align center
</style>
