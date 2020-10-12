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
        redirect: '/fsRepalceField/twomenupath',
        children: [
          {
            path: "twomenupath",
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
