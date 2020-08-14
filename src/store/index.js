import Vue from "vue";
import Vuex from "vuex";
import initState from "./initVues";
import { createVuexPersistence } from "./plugins";
const persistenceMutatonsType = [];
const vuexPersistence = createVuexPersistence(persistenceMutatonsType);
Vue.use(Vuex);
const modules = {};
const requireVuexModule = require.context(
  "./../views",
  true,
  /vuex_module+\.js$/
);
// 自动注册modules
requireVuexModule.keys().forEach(filename => {
  const moduleName = filename.split("/")[1];
  const module = requireVuexModule(filename);
  Reflect.set(modules, moduleName, module.default);
});
export default new Vuex.Store({
  ...initState,
  modules,
  plugins: [vuexPersistence]
});
