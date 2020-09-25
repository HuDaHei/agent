import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/loadVxeUtils.js";
import "./registerServiceWorker";
import { loadElementUI } from "@/utils/loadElementUI.js";
import { post } from "@/utils/fetch.js";
import { permission } from "@/mixin/global.js";
import { loadVxeTable } from "@/utils/loadVxeTable.js";
import { loadI18n } from "@/i18n/index.js";
import loadIframe from "@/components/iframe-modal/index.js";
Vue.config.productionTip = false;
Vue.prototype.$_post = post;
Vue.mixin(permission); // 全局混合
loadElementUI(Vue); // 按需加载elementui组件
const i18n = loadI18n(Vue); //国际化
loadVxeTable(Vue, i18n); // 按需加载表格组件
loadIframe(Vue); // 加载iframe弹层组件全局
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
