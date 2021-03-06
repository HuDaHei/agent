import Layout from "@/layout/index.jsx";
const assetsData = [
  {
    path: "/assetsData",
    component: Layout,
    meta: {
      menuName: "数据资产",
      permissionCode: "marketing-data-asset-list$marketing-data-asset-overview",
    },
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "assetsData" */ "@/layout/secondMenu.vue"
          ),
        redirect: "/assetsData/survey",
        children: [
          {
            path: "survey",
            name: "survey",
            component: () =>
              import(
                /* webpackChunkName: "assetsData" */ "@/views/assetsData/survery/index.vue"
              ),
            meta: {
              menuName: "数据资产概况",
              icon: "iconfont iconzichangaikuang",
              permissionCode: "marketing-data-asset-overview",
            },
          },
          {
            path: "manage",
            name: "manage",
            component: () =>
              import(
                /* webpackChunkName: "manage" */ "@/views/assetsData/manage/index.vue"
              ),
            meta: {
              menuName: "数据资产管理",
              icon: "iconfont iconzichanguanli",
              permissionCode: "marketing-data-asset-list",
            },
          },
        ],
      },
    ],
  },
];

export default {
  router: assetsData,
  position: 1,
};
