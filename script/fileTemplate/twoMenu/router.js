import Layout from "@/layout/index.jsx";
const fsRepalceField = [
  {
    path: "/fsRepalceField",
    // name: "onemenu", 一级路由不要设置name属性
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
            name: "twomenupathname",
            // eslint-disable-next-line prettier/prettier
            component: () => import(/* webpackChunkName: "fsRepalceField" */ "./twomenu.vue"),
            meta: {
              menuName: "twomenupathcnname"
            }
          }
        ]
      }
    ]
  }
];

export default {
  router:fsRepalceField,
  position:fsRepalcePosition
};
