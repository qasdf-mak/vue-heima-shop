<template>
  <div class="login-bg" :style="bgUrl">
    <div class="random-bg-image">
      <a href="javascript:;" @click="randomnum">
        <span class="iconfont icon">&#xe620;</span>
        <span class="text">换肤</span>
      </a>
    </div>
    <div class="main-box">
      <transition name="fade" v-if="isLogin">
        <login-box
          :avatarUrl="avatarUrl"
          :formLogin="formLogin"
          :rules="rules"
          @goLogin="goLogin"
          @goRegister="isLogin = false"
        >
        </login-box>
      </transition>
      <transition name="fade" v-else>
        <register-box
          :avatarUrl="avatarUrl"
          :formRegister="formRegister"
          :rules="rulesRegister"
          @goRegister="goRegister"
          @goLoginView="isLogin = true"
        >
        </register-box>
      </transition>
    </div>
  </div>
</template>

<script>
import loginBox from "./components/login.vue"
import registerBox from "./components/register.vue"
import { login, register } from "@/api/login.js"
export default {
  data() {
    return {
      randomNum: 0,
      isLogin: true,
      formLogin: {
        userName: "",
        passWord: "",
      },
      formRegister: {
        userName: "",
        passWord: "",
        email: "",
        phone: "",
      },
      rules: {
        userName: [
          {
            validator: this.userNameVerify,
            trigger: "blur",
          },
        ],
        passWord: [
          {
            validator: this.passWordVerify,
            trigger: "blur",
          },
        ],
      },
      rulesRegister: {
        userName: [
          {
            validator: this.userNameVerify,
            trigger: "blur",
          },
        ],
        passWord: [
          {
            validator: this.passWordVerify,
            trigger: "blur",
          },
        ],
        phone: [
          {
            validator: this.phoneVerify,
            trigger: "blur",
          },
        ],
        email: [
          {
            validator: this.emailVerify,
            trigger: "blur",
          },
        ],
      },
    }
  },
  created() {},
  components: {
    loginBox,
    registerBox,
  },
  computed: {
    bgUrl() {
      return (
        " background: url(" +
        require("../../assets/random/" + this.randomNum + ".jpg") +
        ") 0% 0% / cover no-repeat;"
      )
    },
    avatarUrl() {
      return require("../../assets/random/" + this.randomNum + ".jpg")
    },
  },
  mounted() {},
  methods: {
    userNameVerify(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入账号"))
      } else {
        let Verify = /^[\u4e00-\u9fa5a-zA-Z0-9]{5,12}$/
        if (Verify.test(value)) {
          console.log("合格")
          callback()
        } else {
          callback(new Error("请输入6-12位字符"))
        }
      }
    },
    passWordVerify(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        let Verify = /^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/
        if (Verify.test(value)) {
          callback()
        } else {
          callback(new Error("请输入6-12位字符"))
        }
      }
    },
    phoneVerify(rule, value, callback) {
      console.log(value === "")
      console.log(value)
      if (value === "") {
        callback(new Error("请输入手机号码"))
      } else {
        let Verify = /^1[3456789]\d{9}$/
        if (Verify.test(value)) {
          callback()
        } else {
          callback(new Error("请输入正确的手机号码"))
        }
      }
    },
    emailVerify(rule, value, callback) {
      console.log(value === "")
      console.log(value)
      if (value === "") {
        callback(new Error("请输入邮箱"))
      } else {
        let Verify = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (Verify.test(value)) {
          callback()
        } else {
          callback(new Error("请输入正确的邮箱"))
        }
      }
    },
    randomnum() {
      this.randomNum = parseInt(Math.random() * 14)
    },
    goLogin(formLogin) {
      const data = {
        username: formLogin.userName,
        password: formLogin.passWord,
      }
      login(data).then((res) => {
        if (res.data.meta.status === 200) {
          this.$message({
            type: "success",
            message: res.data.meta.msg,
          })
          sessionStorage.setItem("token", res.data.data.token)
          this.$router.push("/home")
        } else {
          this.$message({
            type: "error",
            message: res.data.meta.msg,
          })
        }
      })
    },
    goRegister(formRegister) {
      const data = {
        username: formRegister.userName,
        password: formRegister.passWord,
        email: formRegister.email,
        mobile: formRegister.phone,
      }
      register(data).then((res) => {
        if (res.data.meta.status === 200) {
          this.$message({
            type: "success",
            message: res.data.meta.msg + "即将前往登录页面",
          })
          this.isLogin = true
          this.formLogin.userName = formRegister.userName
          this.formLogin.passWord = formRegister.passWord
        } else {
          this.$message({
            type: "error",
            message: res.data.meta.msg,
          })
        }
      })
    },
  },
}
</script>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.login-bg {
  position: relative;
  height: 100%;
}

.random-bg-image {
  a {
    color: #fff;
    text-shadow: 2px 2px 5px #333;

    text-decoration: none;
    display: flex;

    .icon {
      font-size: 20px;
      padding-right: 8px;
    }
  }

  color: #fff;
  position: absolute;
  top: 20px;
  right: 40px;
}
</style>
