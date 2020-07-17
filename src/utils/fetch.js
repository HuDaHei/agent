// post 发送数据
export async function postData(url = "", config = {}) {
  try {
    if (url.length) {
      const { data = {}, headers = {} } = config;
      const fetchRes = await fetch(url, {
        body: JSON.stringify(data),
        method: "POST",
        mode: "cors",
        ...config,
        headers: {
          "content-type": "application/json",
          ...headers
        }
      });
      const result = await fetchRes.json();
      return result;
    } else {
      throw new Error("postData的url参数不能为空字符串");
    }
  } catch (err) {
    console.error(err, "postData函数");
  }
}
