export const permissionFun = (router, store) => {
  router.beforeEach(async (to, from, next) => {
    await store.dispatch("updateUserInfo");
    next();
  });
};
