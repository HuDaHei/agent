const layoutMenu = {
  name: "layoutNav",
  computed: {
    routes() {
      const routes = this.$router.options.routes;
      return (
        routes.filter(r => {
          return Reflect.has(r, "meta") && Reflect.has(r.meta, "menuName");
        }) || []
      );
    }
  },
  methods: {
    linkClick() {
      console.log("kkk");
    }
  },
  render() {
    // const firstLevelMenu = this.createMenu(this.routes);
    return (
      <section>
        <section>
          <nav>
            {this.routes.map(r => {
              const { path, meta = {} } = r;
              const { menuName } = meta;
              const to = { path };
              return <router-link to={to}>{menuName}</router-link>;
            })}
          </nav>
        </section>
        <router-view></router-view>
      </section>
    );
  }
};

export default layoutMenu;
