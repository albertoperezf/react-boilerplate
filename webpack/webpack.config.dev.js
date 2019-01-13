const path = require('path');
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
  }
};
