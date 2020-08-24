import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "@/utils/initLocalStore.js";
import "element-ui/lib/theme-chalk/index.css";
import { loadElementUI } from "@/utils/loadElementUI.js";
import { post } from "@/utils/fetch.js";
import { permission } from "@/mixin/global.js";

Vue.config.productionTip = false;
Vue.prototype.$_post = post;
Vue.mixin(permission);
// 懒加载elementui
loadElementUI(Vue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
