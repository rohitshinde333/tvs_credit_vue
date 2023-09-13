const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,

  // Add a devServer configuration to allow host headers
  devServer: {
    disableHostCheck: true,
  },
});
