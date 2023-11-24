const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/api": {
        target: "http://hrotest.huokesaas.com",
      },
    },
  },
});
