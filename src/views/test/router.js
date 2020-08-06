import Layout from "@/layout/index.jsx";
const test = [
  {
    path: "/test",
    name: "test",
    component: Layout,
    meta: {
      menuName: "kk",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "test" */ "./index.vue")
      }
    ]
  }
];

export default test;
