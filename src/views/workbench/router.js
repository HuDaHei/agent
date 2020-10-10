import Layout from "@/layout/index.jsx";
const workbench = [
  {
    path: "/workbench",
    component: Layout,
    meta: {
      menuName: "工作台",
      permissionCode: "workbench-module",
    },
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "workbench" */ "./index.vue"),
      },
    ],
  },
];

export default {
  router: workbench,
  position: 0,
};
