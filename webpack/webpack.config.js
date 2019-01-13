/* eslint-disable import/no-dynamic-require,global-require */

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const addons = addonsArg => {
  const addon = [].concat.apply([], [addonsArg]).filter(Boolean);

  return addon.map(addonName => require(`./addons/webpack.${addonName}.js`));
};

module.exports = env => {
  const envConfig = require(`./webpack.config.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
};
