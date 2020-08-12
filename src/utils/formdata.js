/**
 * @param  {} data={}
 */
export function formdata(data = {}) {
  const dataEnteries = Object.entries(data);
  const formData = new FormData();
  for (const [key, value] of dataEnteries) {
    formData.append(key, value);
  }
  return formData;
}
// 根据不同的content-type处理data
export function contentTypeFunData(contextType = "", data = {}) {
  const dataEnteries = Object.entries(data);
  const contentTypeFunData = {
    "application/x-www-form-urlencoded": () => {
      //name=age&age=18
      let paramArr = [];
      for (const [key, value] of dataEnteries) {
        paramArr.push(`${key}=${value}`);
      }
      return paramArr.join("&");
    }
  };
  const fun = Reflect.get(contentTypeFunData, contextType) || (() => {});
  return fun();
}
