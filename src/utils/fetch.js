import { getCookie } from "@/utils/cookie.js";
import { Message } from "element-ui";
import { contentTypeFunData } from "@/utils/formdata.js";

// 不同的状态处理
const operateStatus = (status, message = "API未知错误") => {
  const statusMap = new Map([
    [
      401,
      () => {
        Message({
          type: "error",
          message: message || "暂无权限"
        });
        throw new Error(message);
      }
    ],
    [
      500,
      () => {
        Message.error(message);
        throw new Error(message);
      }
    ],
    [
      200,
      () => {
        // confirm("请求成功");
      }
    ]
  ]);
  const statusFun = statusMap.get(status) || (() => {});
  statusFun();
};

// post 发送数据
export async function post(url = "", config = {}) {
  try {
    if (url.length) {
      let { data = {}, headers = {}, method = "POST" } = config;
      headers = {
        "Content-Type": "application/json",
        Authorization: getCookie("jwt-token"),
        ...headers
      };
      const contentType = Reflect.get(headers, "Content-Type");
      data = contentTypeFunData(`${contentType}-${method}`, data);
      const fetchRes = await fetch(`${process.env.VUE_APP_BASE_API}${url}`, {
        body: data,
        mode: "cors",
        method,
        ...config,
        headers
      });
      const { status } = fetchRes;
      const result = await fetchRes.json();
      const { message = "" } = result;
      operateStatus(status, message);
      return result;
    } else {
      throw new Error("fetch post的url参数不能为空字符串");
    }
  } catch (err) {
    console.error(err, "fetch post函数");
  }
}
// get 获取数据
export async function get(url, config = {}) {
  try {
    if (url.length) {
      let { data = {}, headers = {}, method = "GET" } = config;
      headers = {
        "Content-Type": "application/json",
        Authorization: getCookie("jwt-token"),
        ...headers
      };
      const contentType = Reflect.get(headers, "Content-Type");
      data = contentTypeFunData(`${contentType}-${method}`, data);
      const fetchRes = await fetch(
        `${process.env.VUE_APP_BASE_API}${url}?${data}`,
        {
          method,
          mode: "cors",
          ...config,
          headers
        }
      );
      const { status } = fetchRes;
      const result = await fetchRes.json();
      const { message = "" } = result;
      operateStatus(status, message);
      return result;
    } else {
      throw new Error("fetch get的url参数不能为空字符串");
    }
  } catch (err) {
    console.error(err, "fetch get 函数");
  }
}
