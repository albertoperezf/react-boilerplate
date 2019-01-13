/* eslint-disable global-require,import/no-extraneous-dependencies */

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new WebpackBundleAnalyzer({
      generateStatsFile: true
    })
  ]
};
