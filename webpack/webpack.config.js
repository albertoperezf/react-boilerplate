/* eslint-disable import/no-dynamic-require,global-require */

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = env => {
  const envConfig = require(`./webpack.config.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
