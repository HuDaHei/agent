import "./index.scss";
import navLogo from "@/assets/navLogo.svg";
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
        <section class="first_nav_container">
          <h4 class="first_nav_sign">
            <img src={navLogo} width="84" height="42" />
            <span class="sign_title">代理商服务系统</span>
          </h4>
          <section>
            <nav>
              <el-menu mode="horizontal">
                {this.routes.map(r => {
                  const { path, meta = {} } = r;
                  const { menuName } = meta;
                  return <el-menu-item index={path}>{menuName}</el-menu-item>;
                })}
              </el-menu>
            </nav>
          </section>
        </section>
        <section>
          <router-view></router-view>
        </section>
      </section>
    );
  }
};

export default layoutMenu;
