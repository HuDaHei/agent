module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      const isProd = process.env.NODE_ENV === "production";
      const normalize = isProd
        ? "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css"
        : "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.css";
      const [config] = args;
      const localForage = isProd
        ? "https://cdn.bootcdn.net/ajax/libs/localforage/1.9.0/localforage.min.js"
        : "https://cdn.bootcdn.net/ajax/libs/localforage/1.9.0/localforage.js";
      return [{ ...config, normalize, localForage }];
    });
  }
};
