import Layout from "@/layout/index.jsx";
const fsRepalceField = [
  {
    path: "/fsRepalceField",
    name: "fsRepalceField",
    component: Layout,
    meta: {
      menuName: "fsRepalceMenuName",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "fsRepalceField" */ "./index.vue")
      }
    ]
  }
];

export default fsRepalceField;
