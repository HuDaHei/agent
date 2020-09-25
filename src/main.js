import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import enUS from 'vxe-table/lib/locale/lang/en-US'
import "@/utils/loadVxeUtils.js";
import "./registerServiceWorker";
import "element-ui/lib/theme-chalk/index.css";
import { loadElementUI } from "@/utils/loadElementUI.js";
import { post } from "@/utils/fetch.js";
import { permission } from "@/mixin/global.js";
import { loadVxeTable } from "@/utils/loadVxeTable.js";
Vue.config.productionTip = false;
Vue.prototype.$_post = post;
Vue.mixin(permission);
Vue.use(VueI18n)
const messages = {
  zh_CN: {
    ...zhCN
  },
  en_US: {
    ...enUS
  }
};
const i18n = new VueI18n({
  locale: 'zh_CN',
  messages,
});
loadElementUI(Vue); // 按需加载elementui组件
loadVxeTable(Vue, i18n); // 按需加载表格组件
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
