export const permissionFun = (router, store) => {
  router.beforeEach(async (to, from, next) => {
    await store.dispatch("updateUserInfo");
    const permissionCodeArr = store.getters.getPermissionsCode;
    const currentRouter = to.matched.find((tm) => tm.path === to.fullPath);
    const { meta = {} } = currentRouter || {};
    const { permissionCode } = meta;
    const hasPermission = permissionCodeArr.includes(permissionCode);
    if (hasPermission) {
      next();
    } else {
      const error = new Error("暂无权限");
      next(error);
    }
  });
  router.onError((err) => {
    console.log(err);
    window.alert("暂无权限");
  });
};
