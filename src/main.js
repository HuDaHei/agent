import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { postData } from "@/utils/fetch.js";
Vue.config.productionTip = false;
Vue.prototype.postData = postData;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
