import { localStore } from "@/utils/localStore.js";
import { removeCookie } from "@/utils/cookie.js"
const unique = window.sessionStorage.getItem("unique");
if (unique) {
  // 修复刷新丢失$localStore问题
  window.$localStore = localStore(unique);
}
// 页面关闭 清空本地数据
window.addEventListener("unload", () => {
  const unique = window.sessionStorage.getItem("unique");
  if (unique) {
    window.$localStore.dropInstance({ name: unique });
  } else {
    window.$localStore.dropInstance();
  }
  removeCookie("jwt-token");
});
