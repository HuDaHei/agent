import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/login.vue";
Vue.use(VueRouter);
// init
const routesInit = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      permissionCode: "freedom",
    },
    component: Login,
  },
];
let routes = [];
// 获取各个文件夹下的router.js
const requireRouter = require.context("./../views", true, /router+\.js$/);
requireRouter.keys().forEach((filename) => {
  const { router, position } = requireRouter(filename).default;
  if (!Reflect.get(routes, position)) {
    routes[position] = router;
  }
});
routes = routes.filter((r) => r);
routes = routesInit.concat(...routes);
//////////////////////////
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
