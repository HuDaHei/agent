import { Input, Form, FormItem, Button } from "element-ui";
export function loadElementUI(Vue) {
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
  Vue.use(Input);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);
}
