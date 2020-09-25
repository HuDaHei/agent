import { get } from "@/utils/fetch.js";
// 获取用户的信息
export async function getUserInfo() {
  const result = await get("/ucenter/users/fetch/by-token");
  return result;
}
