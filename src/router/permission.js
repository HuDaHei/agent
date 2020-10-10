export const permissionFun = (router, store) => {
  router.beforeEach(async (to, from, next) => {
    store.dispatch("updateUserInfo");
    next();
  });
  router.onError((err) => {
    console.log(err);
    window.alert("暂无权限");
  });
};
