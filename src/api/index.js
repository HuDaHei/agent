import { post } from "@/utils/fetch.js";
// 获取用户的信息
export async function getUserInfo() {
  const result = await post("/ucenter/users/fetch/by-token", { method: "GET" });
  return result;
}