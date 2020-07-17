import Index from "./index.vue";
const example = [
  {
    path: "/example",
    name: "example",
    component: Index,
    meta: {
      menuName: "菜单example"
    },
    children: [
      {
        path: "test",
        name: "test",
        component: Index,
        meta: {
          menuName: "耳机test"
        }
      }
    ]
  }
];

export default example;
