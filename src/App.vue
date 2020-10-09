<template>
  <div id="app">
    <router-view v-if="loading" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
    };
  },
  async mounted() {
    // 当前页不是登录页 就获取用户数据
    if (this.$route.name !== "login") {
      await this.updateUserInfo();
      this.loading = true;
    } else {
      this.loading = true;
    }
  },
  methods: {
    ...mapActions(["updateUserInfo"]),
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1024px;
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
.el-dropdown-menu--small .el-dropdown-menu__item {
  font-size: 12px !important;
}
</style>
