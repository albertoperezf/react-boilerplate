const webpackMerge = require('webpack-merge');
const path = require('path');
const devConfig = require('./webpack.config.dev');
const webpackConstants = require('./constants/webpack.constants');

const { dirname } = webpackConstants;
const host = '0.0.0.0'; // src ip 0.0.0.0 will accept from any dns or ip. e.g localhost or 192.168.1.110 (ip machine)
const port = 3018; // src port
// const serverHost = '0.0.0.0'; // Ip server machine, not accepted localhost if you launch src on docker
// const serverPort = 8880; // server port

const devLocalConfig = {
  devServer: {
    open: true,
    host,
    port,
    public: `${host}:${port}`,
    contentBase: path.join(dirname, 'build'),
    historyApiFallback: true,
    proxy: {},
    stats: {
      assets: true,
      children: true,
      chunks: true,
      hash: true,
      modules: true,
      publicPath: true,
      timings: true,
      version: true,
      warnings: true
    }
  }
};

module.exports = {
  ...webpackMerge(devConfig, devLocalConfig)
};
