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
        component: () => import(/* webpackChunkName: "fsRepalceField" */ "./index.vue"),
      }
    ]
  }
];

export default {
  router:fsRepalceField,
  position:fsRepalcePosition
};
