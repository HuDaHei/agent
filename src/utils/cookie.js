export function setCookie(key = "test", value = "test") {
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
