<template>
  <div>
    <template v-for="r in second">
      <router-link :key="r.path" :to="{ name: r.name }" append>{{
        r.meta.menuName
      }}</router-link>
    </template>
    <router-view></router-view>
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
    console.log(this.$route, "$route");
    console.log(this.$router, "$router");
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
<style></style>
