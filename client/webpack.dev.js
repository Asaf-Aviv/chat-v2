const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 3000,
    hot: true,
    proxy: {
      '/': {
        target: 'http://[::1]:5000/',
        secure: false,
        changeOrigin: true,
      },
      '/socket.io': {
        target: 'http://localhost:5000',
        ws: true,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
