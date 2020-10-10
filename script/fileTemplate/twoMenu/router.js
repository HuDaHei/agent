import Layout from "@/layout/index.jsx";
const fsRepalceField = [
  {
    path: "/fsRepalceField",
    component: Layout,
    meta: {
      menuName: "fsRepalceMenuName",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "fsRepalceField" */ "@/layout/secondMenu.vue"),
        children: [
          {
            path: "",
            name: "twomenupathname",
            component: () => import(/* webpackChunkName: "fsRepalceField" */ "./index.vue"),
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
