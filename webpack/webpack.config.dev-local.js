const host = '0.0.0.0';
const path = require('path');
const port = 3018;
const webpack = require('webpack');
const webpackConstants = require('./constants/webpack.constants');

const { dirname, sassLoaders } = webpackConstants;

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    index: [path.join(dirname, 'src/main.js')]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('DEV')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        oneOf: [
          {
            resourceQuery: /toString/, // foo.css?toString
            use: [
              {
                loader: 'css-to-string-loader'
              }
            ].concat(sassLoaders)
          },
          {
            use: [
              {
                loader: 'style-loader'
              }
            ].concat(sassLoaders)
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    host,
    port,
    public: `${host}:${port}`,
    contentBase: path.join(dirname, 'build'),
    historyApiFallback: true,
    proxy: {},
    disableHostCheck: true,
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
