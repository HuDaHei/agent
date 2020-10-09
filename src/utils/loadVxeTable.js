// import XEUtils from "xe-utils";
import "vxe-table/lib/style.css";
// console.log(XEUtils);
import {
  VXETable,
  Table,
  Select,
  Column,
  Pager,
  Header,
  //   Footer,
  //   Filter,
  //   Edit,
  //   Menu,
  //   Export,
  //   Keyboard,
  //   Validator,

  //   Grid,
  //   Toolbar,
  //   Checkbox,
  //   Radio,
  //   Input,
  //   Textarea,
  //   Button,
  //   Modal,
  //   Tooltip,
  //   Form,
  //   Switch,
  //   List
} from "vxe-table";
export function loadVxeTable(Vue, i18n) {
  console.log(i18n);
  VXETable.setup({
    i18n: (key, args) => i18n.t(key, args),
  });
  Vue.use(VXETable);
  Vue.use(Header);
  Vue.use(Pager);
  Vue.use(Column);
  Vue.use(Select);
  Vue.use(Table);
}
