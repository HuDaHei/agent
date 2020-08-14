import Layout from "@/layout/index.jsx";
const workbench = [
  {
    path: "/workbench",
    // name: "onemenu", 一级路由不要设置name属性
    component: Layout,
    meta: {
      menuName: "工作台",
      permissionCode: "workbench-module"
    },
    children: [
      {
        path: "",
        // eslint-disable-next-line prettier/prettier
        component: () => import(/* webpackChunkName: "workbench" */ "./index.vue"),
      }
    ]
  }
];

export default workbench;
