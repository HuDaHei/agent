import Layout from "@/layout/index.jsx";
const organization = [
  {
    path: "/organization",
    component: Layout,
    meta: {
      menuName: "组织管理",
      permissionCode: "freedom",
    },
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "organization" */ "@/layout/secondMenu.vue"
          ),
        children: [
          {
            path: "",
            name: "people",
            component: () =>
              import(/* webpackChunkName: "organization" */ "./twomenu.vue"),
            meta: {
              menuName: "人员管理",
              permissionCode: "freedom",
            },
          },
        ],
      },
    ],
  },
];

export default {
  router: organization,
  position: 2,
};
