const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  
  // Add devServer configuration to allow host headers
  devServer: {
    allowedHosts: [
      'housefront.onrender.com', // Replace with your Render subdomain
    ],
  },
});
