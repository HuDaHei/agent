<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { getUserInfo } from "@/api/index.js";
import { mapActions } from "vuex";
export default {
  async mounted() {
    // 当前页不是登录页 就获取用户数据
    if (this.$route.name !== "login") {
      this.getUserInfo();
    }
  },
  methods: {
    ...mapActions(["updateUserInfo"]),
    async getUserInfo() {
      const userInfo = await getUserInfo();
      // module
      let { permissions } = userInfo;
      permissions = permissions.map(p => {
        const { module } = p;
        return module;
      });
      this.updateUserInfo(Object.assign({}, userInfo, { permissions }));
    },
    logout() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
