<template>
  <div class="login" :style="bgImg">
    <section class="login_container">
      <h4>代理商服务系统</h4>
      <el-form class="login_form" :model="login" :rules="rules" ref="login">
        <el-form-item prop="loginKey">
          <el-input
            v-model="login.loginKey"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="login.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_safe" prop="captchaValue">
          <el-input
            v-model="login.captchaValue"
            prefix-icon="el-icon-umbrella"
            placeholder="请输入验证码"
          ></el-input>
          <img
            class="captcha-img"
            height="32px"
            :src="captchaImg"
            @click="handlerCaptcha"
            alt="验证码"
          />
        </el-form-item>
        <el-form-item>
          <el-button class="login_submit" @click="handlerLogin('login')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import { uuid } from "@/utils/uuid.js";
import { setCookie } from "@/utils/cookie.js";
import { localStore } from "@/utils/localStore.js";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      login: {
        loginKey: "",
        password: "",
        captchaType: "GRAPHIC",
        captchaValue: "",
        rememberMe: false,
        captchaKey: uuid()
      }
    };
  },
  computed: {
    bgImg() {
      return {
        backgroundImage: `url(https://guidescdn.yiye.ai/bgimages/bg${parseInt(
          Math.random() * 13
        )}.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
    },
    captchaImg() {
      return `${process.env.VUE_APP_BASE_API}/ucenter/captchas/fetch/graphic?captchaKey=${this.login.captchaKey}`;
    },
    rules() {
      return {
        loginKey: [
          {
            required: true,
            message: "请输入邮箱或手机号",
            trigger: ["change", "submit"]
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change", "submit"]
          }
        ],
        captchaValue: [
          {
            required: true,
            message: "请输入验证码",
            trigger: ["change", "submit"]
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions(["updateUserInfo"]),
    handlerLogin(ref = "") {
      this.$refs[ref].validate(async valid => {
        if (valid) {
          const res = await this.$_post("/ucenter/sessions/action/login", {
            data: this.login,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          });
          const { token = "" } = res || {};
          if (token.length) {
            setCookie("jwt-token", token);
            // 创建本地存储的实例
            this.createLocalStore(this.login.loginKey);
            window.sessionStorage.setItem("unique", this.login.loginKey);
            const unikey = createSingleMd5(this.login.loginKey);
            console.log(unikey, "unikey");
            await this.updateUserInfo();
            this.$router.push({ path: "/workbench" });
          } else {
            this.handlerCaptcha();
          }
        } else {
          return false;
        }
      });
    },
    handlerCaptcha() {
      this.login.captchaKey = uuid();
    },
    createLocalStore(unique = "") {
      // 创建本地存储的是实例 后续所有数据通过$localStore方式存储;
      localStore(unique);
    }
  }
};
</script>
<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-height: 380px;
  &_container {
    display: flex;
    flex-direction: column;
    min-width: 35%;
    background-color: #fff;
    font-size: 12px;
    opacity: 0.84;
    border-radius: 3px;
    h4 {
      font-size: 30px;
      color: #333;
      white-space: nowrap;
      text-align: center;
    }
  }
  &_form {
    width: 80%;
    margin: auto;
  }
  &_safe {
    .el-form-item__content {
      display: flex;
      img {
        width: 100px;
        margin-left: 4px;
      }
    }
  }
  &_submit {
    display: inline-block;
    width: 100%;
    margin: 20px 0;
    text-align: center;
  }
}
</style>
