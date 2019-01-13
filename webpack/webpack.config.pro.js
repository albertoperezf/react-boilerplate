const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConstants = require('./constants/webpack.constants');

const { dirname, sassLoaders, vendors } = webpackConstants;

module.exports = {
  mode: 'production',
  entry: {
    main: [...vendors, path.join(dirname, 'src/main.js')]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...webpackConstants.htmlWebpackPlugin,
      environment: 'PRO'
    }),
    new CleanWebpackPlugin(['build'], {
      root: path.join(dirname),
      verbose: true,
      dry: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('PRO')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new CopyWebpackPlugin(['../public'])
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
                loader: MiniCssExtractPlugin.loader
              }
            ].concat(sassLoaders)
          }
        ]
      }
    ]
  }
};
