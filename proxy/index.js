const { createProxyMiddleware } = require ("http-proxy-middleware");
const address = require("address")
const proxy = require ("./proxy.json");

module.exports = function (app) {
  Object.keys (proxy).forEach ((key) => {
    const pathRewrite = {};
    pathRewrite[`^${key}`] = "";
    app.use (key, createProxyMiddleware ({
      target: proxy[key],
      changeOrigin: true,
      pathRewrite,
    }));
  });
  app.use("/testApi", createProxyMiddleware ({
    target: `http://${address.ip()}:3001/`,
    changeOrigin: true,
    pathRewrite: {
      "^/testApi": ""
    },
  }))
};
