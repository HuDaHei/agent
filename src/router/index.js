import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/login.vue";
Vue.use(VueRouter);
// init
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

// 获取各个文件夹下的router.js
const requireRouter = require.context("./../views", true, /router+\.js$/);
requireRouter.keys().forEach(filename => {
  const singleRouterConfigArr = requireRouter(filename).default;
  const [config] = singleRouterConfigArr;
  routes.push(config);
});
//////////////////////////
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
