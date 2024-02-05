const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    historyApiFallback: true, 
  },
});
