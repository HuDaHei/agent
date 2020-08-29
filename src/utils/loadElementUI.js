import { Input, Form, FormItem, Button, Menu, MenuItem } from "element-ui";
export function loadElementUI(Vue) {
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
  Vue.use(Input);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);
  Vue.use(Menu);
  Vue.use(MenuItem);
}
