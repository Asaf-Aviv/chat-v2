const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new MinifyPlugin()],
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
});
