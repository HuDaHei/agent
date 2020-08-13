import { randomWord } from "@/utils/random.js";
// 对数据进行本地化加密处理
//加密
export function encryption(data = {}) {
  // eslint-disable-next-line prettier/prettier
  const dataStr = typeof data == 'object' ? JSON.stringify(data): data;
  const start = randomWord(24);
  const end = randomWord(15);
  return `${start}${window.btoa(dataStr)}${end}`;
}
//解密
export function decrypt(dataStr = "") {
  const decrypt = dataStr.slice(24, -15);
  return window.atob(decrypt);
}
