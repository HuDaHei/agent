module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      const normalize =
        process.env.NODE_ENV === "production"
          ? "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css"
          : "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.css";
      const [config] = args;
      return [{ ...config, normalize }];
    });
  }
};
