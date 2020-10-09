<template>
  <div class="second_nav_container">
    <div class="second_nav_menu">
      <template v-for="r in second">
        <router-link
          :key="r.path"
          :to="{ name: r.name }"
          active-class="active-class"
          class="second_nav_sub"
          append
        >
          <i :class="r.meta.icon"></i>
          {{ r.meta.menuName }}</router-link
        >
      </template>
    </div>
    <div class="second_nav_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondLevelMenu",
  data() {
    return {
      second: [],
    };
  },
  mounted() {
    this.second = Object.freeze(this.getSecondDLevel());
  },
  methods: {
    // 获取二级路由数据
    getSecondDLevel() {
      const { fullPath = "" } = this.$route;
      const [, oneLevelRoutePath = "yhushey"] = fullPath.split("/");
      const routes = this.$router.options.routes;
      const currentRoutes =
        routes.find((r) => {
          return r.path.includes(oneLevelRoutePath);
        }) || [];
      const { children = [] } = currentRoutes;
      const [seconde = {}] = children;
      return seconde.children || [];
    },
  },
};
</script>
<style lang="scss" scope>
$height: 32px;
$activeColor: #51c75b;
.second_nav {
  &_container {
    font-size: 12px;
    text-align: center;
  }
  &_menu {
    background-color: #fafafa;
  }
  &_sub {
    display: inline-block;
    height: $height;
    line-height: $height;
    padding: 0 15px;
    border-bottom: 2px solid transparent;
  }
  &_content {
    margin-top: 10px;
  }
}
.active-class {
  color: $activeColor;
  border-bottom-color: $activeColor;
}
a {
  text-decoration: none;
}
</style>
