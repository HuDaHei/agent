import Layout from "@/layout/index.jsx";
const fsRepalceField = [
  {
    path: "/fsRepalceField",
    // name: "onemenu",
    component: Layout,
    meta: {
      menuName: "fsRepalceMenuName",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        // eslint-disable-next-line prettier/prettier
        component: () => import(/* webpackChunkName: "fsRepalceField" */ "@/layout/secondMenu.vue"),
        children: [
          {
            path: "",
            name: "secondeLevel",
            // eslint-disable-next-line prettier/prettier
            component: () => import(/* webpackChunkName: "fsRepalceField" */ "./index.vue"),
            meta: {
              menuName: "二级菜单一号"
            }
          }
        ]
      }
    ]
  }
];

export default fsRepalceField;
