import { encryption, decrypt } from "@/utils/encryption.js";
// 给你localForage存储数据前加密一下 不支持回调 只支持promise
// 暂时只支持能够JSON化的数据存储
export function localStore(unique = "") {
  // eslint-disable-next-line no-undef
  window.$_localStore = localforage.createInstance({
    name: unique
  });
  // eslint-disable-next-line no-undef
  const localStore = new Proxy(window.$_localStore, {
    get(target, propkey) {
      if (propkey == "setItem") {
        return (key, value) => {
          if (value instanceof Object) {
            const data = encryption(value);
            const fun = Reflect.get(target, propkey);
            const newFun = fun.bind(target);
            return newFun(key, data);
          } else {
            console.error(
              "window.$localStore.setItem 目前只支持能狗JSON序列化的数据"
            );
          }
        };
      } else if (propkey == "getItem") {
        return key => {
          return new Promise(resolve => {
            const fun = Reflect.get(target, propkey);
            const newfun = fun.bind(target);
            newfun(key).then(value => {
              if (value) {
                const data = JSON.parse(decrypt(value));
                resolve(data);
              } else {
                resolve({});
              }
            });
          });
        };
      } else {
        return Reflect.get(target, propkey);
      }
    }
  });
  return localStore;
}
