<template>
  <div class="login">
    <section class="login_container">
      <h4>代理商服务系统</h4>
      <form>
        <input type="text" />
        <input type="password" />
        <div>
          <input type="password" />
        </div>
        <input type="button" @click="handlerLogin" value="登陆" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    handlerLogin() {
      // this.$router.push({ path: "/onemenu" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: cadetblue;
  .login_container {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 60%;
    background-color: #fff;
    font-size: 12px;
    form {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      box-sizing: border-box;
      input {
        padding: 0;
        margin: 0;
        outline: none;
        border: 1px solid skyblue;
        border-radius: 2px;
        height: 32px;
        line-height: unset;
        margin-bottom: 14px;
      }
    }
  }
}
</style>
