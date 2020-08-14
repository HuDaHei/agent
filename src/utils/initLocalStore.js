import { localStore } from "@/utils/localStore.js";
const unique = window.sessionStorage.getItem("unique");
if (unique) {
  // 修复刷新丢失$localStore问题
  window.$localStore = localStore(unique);
};