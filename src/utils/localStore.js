import { encryption, decrypt } from "@/utils/encryption.js";
// 给你localForage存储数据前加密一下 不支持回调 只支持promise
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
          const data = encryption(value);
          const fun = Reflect.get(target, propkey);
          return fun(key, data);
        };
      } else if (propkey == "getItem") {
        return key => {
          return new Promise(resolve => {
            const fun = Reflect.get(target, propkey);
            fun(key).then(value => {
                console.log(value, 'value')
              resolve(decrypt(value));
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
