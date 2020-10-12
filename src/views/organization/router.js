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
        redirect: "/organization/people-manage",
        children: [
          {
            path: "people-manage",
            name: "peopleManage",
            component: () =>
              import(
                /* webpackChunkName: "organization" */ "@/views/organization/people/index.vue"
              ),
            meta: {
              menuName: "人员管理",
              permissionCode: "freedom",
            },
          },
          {
            path: "permission-manage",
            name: "permissionManage",
            component: () =>
              import(
                /* webpackChunkName: "organization" */ "@/views/organization/permission/index.vue"
              ),
            meta: {
              menuName: "权限管理",
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
