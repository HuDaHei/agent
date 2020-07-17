const layoutMenu = {
  name: "layoutNav",
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {
    console.log(this.routes, "routes");
  },
  methods: {
    createMenu(routes = []) {
      const link = [];
      routes.forEach(r => {
        const { name, meta = {} } = r;
        const { menuName } = meta;
        const routerLink = <router-link to={name}>{menuName}</router-link>;
        link.push(routerLink);
      });
      return link;
    }
  },
  render() {
    const firstLevelMenu = this.createMenu(this.routes);
    return <nav>{firstLevelMenu}</nav>;
  }
};

export default layoutMenu;
