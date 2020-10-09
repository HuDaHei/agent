// import { encryption, decrypt } from "@/utils/encryption.js";
// localfroage 实例
export function localStore(unique = "") {
  // eslint-disable-next-line no-undef
  window.$localStorage = localforage.createInstance({
    name: unique,
  });
}
