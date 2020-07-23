import Index from "./index.vue";
import Layout from "@/layout/index.jsx";
const example = [
  {
    path: "/example",
    name: "example",
    component: Layout,
    meta: {
      menuName: "菜单example"
    },
    children: [
      {
        path: "",
        name: "test",
        component: Index,
        meta: {
          menuName: "我是二级"
        }
      },
      {
        path: "test",
        name: "test",
        component: Index,
        meta: {
          menuName: "耳机test"
        }
      }
    ]
  }
];

export default example;
