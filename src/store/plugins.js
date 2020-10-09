// 数据持久化并且加密
// 获取本地存储的数据 在放到vuex中
// 暂时不用
async function getLocalvuexState(type) {
  const result = window.$localStorage && window.$localStorage.getItem(type);
  return result;
}
// types 需要持久化的muateion type
export function createVuexPersistence(types = []) {
  return (store) => {
    types.forEach(async (t) => {
      const payload = await getLocalvuexState(t);
      t && store.commit(t, payload);
    });
    store.subscribe((mutation) => {
      const { type, payload } = mutation;
      if (types.includes(type)) {
        window.$localStorage && window.$localStorage.setItem(type, payload);
      }
    });
  };
}
