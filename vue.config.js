//registry.npmjs.org
module.exports = {
  devServer: {
    host: "localhost",
    disableHostCheck: true,
    proxy: {
      "/npm": {
        target: `https://registry.npmjs.org`,
        pathRewrite: { "^/npm": "" },
        logLevel: "debug",
        changeOrigin: true,
      },
    },
  },
};
