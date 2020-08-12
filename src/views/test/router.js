import Layout from "@/layout/index.jsx";
const test = [
  {
    path: "/test",
    // name: "onemenu",
    component: Layout,
    meta: {
      menuName: "test",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        // eslint-disable-next-line prettier/prettier
        component: () => import(/* webpackChunkName: "test" */ "@/layout/secondMenu.vue"),
        children: [
          {
            path: "",
            name: "secondeLevel",
            // eslint-disable-next-line prettier/prettier
            component: () => import(/* webpackChunkName: "test" */ "./index.vue"),
            meta: {
              menuName: "二级菜单一号"
            }
          }
        ]
      }
    ]
  }
];

export default test;
