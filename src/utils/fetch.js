import { getCookie } from "@/utils/cookie.js";
import { Message } from "element-ui";
import { contentTypeFunData } from "@/utils/formdata.js";

// 不同的状态处理
const operateStatus = (status, msg = "API未知错误") => {
  const statusMap = new Map([
    [
      401,
      () => {
        Message.error(msg);
        throw new Error(msg);
      }
    ],
    [
      500,
      () => {
        Message.error(msg);
        throw new Error(msg);
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
      let { data = {}, headers = {} } = config;
      headers = {
        "Content-Type": "application/json",
        Authorization: getCookie("jwt-token"),
        ...headers
      };
      data = contentTypeFunData(Reflect.get(headers, "Content-Type"), data);
      const fetchRes = await fetch(`${process.env.VUE_APP_BASE_API}${url}`, {
        body: data,
        method: "POST",
        mode: "cors",
        ...config,
        headers
      });
      const { status } = fetchRes;
      console.log(fetchRes, "fetchRes");
      const result = await fetchRes.json();
      const { message = "" } = result;
      operateStatus(status, message);
      return result;
    } else {
      throw new Error("postData的url参数不能为空字符串");
    }
  } catch (err) {
    console.error(err, "postData函数");
  }
}
