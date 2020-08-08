import Layout from "@/layout/index.jsx";
const twomenu = [
  {
    path: "/twomenu",
    name: "twomenu",
    component: Layout,
    meta: {
      menuName: "一级菜单二号",
      permissionCode: "has-example"
    },
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "twomenu" */ "./index.vue")
      }
    ]
  }
];

export default twomenu;
