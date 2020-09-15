<template>
  <div class="second_nav_container">
    <div class="second_nav_menu">
      <template v-for="r in second">
        <router-link 
        :key="r.path" 
        :to="{ name: r.name }"
        active-class="active-class"
        class="second_nav_sub"
        append>
        <i :class="r.meta.icon"></i>
        {{r.meta.menuName}}</router-link>
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
      second: []
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
        routes.find(r => {
          return r.path.includes(oneLevelRoutePath);
        }) || [];
      const { children = [] } = currentRoutes;
      const [seconde = {}] = children;
      return seconde.children || [];
    }
  }
};
</script>
<style lang="scss" scope>
$bg_color: #edf0f7;
$height:32px;
$activeColor: #51C75B;
.second_nav {
  &_container {
    font-size: 12px;
    background-color: $bg_color;
    text-align: center;
  }
  &_menu {
    height: $height;
    line-height: $height;
    background-color: #fafafa;
  }
  &_sub{
    margin-left: 15px;
  }
  &_content {
    margin-top: 10px;
  }
}
  .active-class{
    color: $activeColor;
  }
</style>
