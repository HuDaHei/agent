import Layout from "@/layout/index.jsx";
const onemenu = [
  {
    path: "/onemenu",
    name: "onemenu",
    component: Layout,
    meta: {
      menuName: "一级菜单一号",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        // eslint-disable-next-line prettier/prettier
        component: () => import(/* webpackChunkName: "secondMenu" */ "@/layout/secondMenu.vue"),
        children: [
          {
            path: "",
            name: "secondeLevel",
            component: () =>
              import(/* webpackChunkName: "onemenu" */ "./index.vue"),
            meta: {
              menuName: "二级菜单一号"
            }
          },
          {
            path: "test",
            name: "test",
            component: () =>
              import(/* webpackChunkName: "test" */ "./test.vue"),
            meta: {
              menuName: "二级菜单二号"
            }
          }
        ]
      }
    ]
  }
];

export default onemenu;
