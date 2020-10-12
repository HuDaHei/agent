import "./index.scss";
import navLogo from "@/assets/navLogo.svg";
import { mapGetters } from "vuex";
import permissionRouterView from "@/components/permission-router-view/index.vue";
const layoutMenu = {
  name: "layoutNav",
  components: {
    "premission-router-view": permissionRouterView,
  },
  data() {
    return {
      defaultActive: "",
      permissionCode: "",
    };
  },
  computed: {
    ...mapGetters(["getUserName"]),
    routes() {
      const routes = this.$router.options.routes;
      return (
        routes.filter((r) => {
          return Reflect.has(r, "meta") && Reflect.has(r.meta, "menuName");
        }) || []
      );
    },
  },
  watch: {
    defaultActive(path) {
      const currentRouter = this.routes.find((r) => r.path === path) || {};
      const { meta } = currentRouter;
      const { permissionCode } = meta;
      this.permissionCode = permissionCode;
    },
  },
  created() {
    const { matched = [] } = this.$route;
    const [first = {}] = matched;
    const { path: defaultActive } = first;
    this.defaultActive = defaultActive; // 浏览器刷新后确定当前的默认激活菜单
  },
  methods: {
    handlerActiveRouter(data) {
      this.defaultActive = data;

      // const editDefaultActive = (data) => {
      //   this.defaultActive = data;
      // };
      // return debounce(editDefaultActive, 500);
    },
  },
  render() {
    return (
      <section>
        <section class="first_nav_container">
          <h4 class="first_nav_sign">
            <img src={navLogo} width="84" height="42" />
            <span class="sign_title">代理商服务系统</span>
          </h4>
          <section class="first_nav_position">
            <nav>
              <el-menu
                mode="horizontal"
                router={true}
                default-active={this.defaultActive}
                onSelect={this.handlerActiveRouter}
              >
                {this.routes.map((r) => {
                  const { path, meta = {} } = r;
                  const { menuName } = meta;
                  return <el-menu-item index={path}>{menuName}</el-menu-item>;
                })}
              </el-menu>
            </nav>
          </section>
          <div class="first_nav_info">
            {/* 退出 */}
            <el-dropdown trigger="click">
              <span>
                <span>{this.getUserName}</span>
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </section>
        <section class="first_nav_content">
          <premission-router-view
            permissionCode={this.permissionCode}
          ></premission-router-view>
        </section>
      </section>
    );
  },
};

export default layoutMenu;
