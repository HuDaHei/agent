import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { post } from "@/utils/fetch.js";
import { Input, Form, FormItem, Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
//
Vue.config.productionTip = false;
Vue.prototype.$_post = post;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
