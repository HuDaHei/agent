const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      const isProd = process.env.NODE_ENV === "production";
      const normalize = isProd
        ? "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css"
        : "https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.css";
      const [config] = args;
      const localForage = isProd
        ? "https://cdn.bootcdn.net/ajax/libs/localforage/1.9.0/localforage.min.js"
        : "https://cdn.bootcdn.net/ajax/libs/localforage/1.9.0/localforage.js";
      const base64 = isProd
        ? "https://cdn.jsdelivr.net/npm/js-base64@3.4.5/base64.min.js"
        : "https://cdn.jsdelivr.net/npm/js-base64@3.4.5/base64.min.js";
      const md5 = isProd
        ? "https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.0/spark-md5.min.js"
        : "https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.0/spark-md5.js";
      return [{ ...config, normalize, localForage, base64, md5 }];
    });
    config.plugin("analyzer").use(BundleAnalyzerPlugin);
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/variables.scss";`,
      },
    },
  },
};
