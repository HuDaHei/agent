export function setCookie(key = "test", value = "test") {
  debugger;
  document.cookie = `${key}=${value}`;
}
export function getCookie(key = "test") {
  const cookieStr = document.cookie;
  const cookieArr = cookieStr.split(";");
  const findCookie = cookieArr.find(c => {
    return c.startsWith(key);
  });
  const [, value = ""] = findCookie ? findCookie.split("=") : [];
  return value;
}
export function removeCookie(key = "test") {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
