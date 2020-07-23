import Index from "./index.vue";
import Layout from "@/layout/index.jsx";
const example = [
  {
    path: "/example",
    name: "example",
    component: Layout,
    meta: {
      menuName: "菜单example",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        name: "testInit",
        component: Index,
        meta: {
          menuName: "我是二级",
          permissionCode: "has-testInit"
        }
      },
      {
        path: "test",
        name: "test",
        component: Index,
        meta: {
          menuName: "耳机test",
          permissionCode: "freedom"
        }
      }
    ]
  }
];

export default example;
