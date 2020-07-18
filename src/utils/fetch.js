// 不同的状态处理
const operateStatus = status => {
  const statusMap = new Map([
    [
      401,
      () => {
        alert("请登陆");
      }
    ],
    [
      500,
      () => {
        alert("数据获取失败");
      }
    ],
    [
      200,
      () => {
        confirm("请求成功");
      }
    ]
  ]);
  const statusFun = statusMap.get(status) || (() => {});
  statusFun();
};

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
      const { status } = fetchRes;
      operateStatus(status);
      const result = await fetchRes.json();
      return result;
    } else {
      throw new Error("postData的url参数不能为空字符串");
    }
  } catch (err) {
    console.error(err, "postData函数");
  }
}
