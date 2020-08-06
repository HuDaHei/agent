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
  mounted() {
    console.log(this.routes, "routes");
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
              const { name, meta = {} } = r;
              const { menuName } = meta;
              return <router-link to={name}>{menuName}</router-link>;
            })}
          </nav>
        </section>
        <router-view></router-view>
      </section>
    );
  }
};

export default layoutMenu;
