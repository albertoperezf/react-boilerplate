const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConstants = require('./constants/webpack.constants');

const { dirname } = webpackConstants;

module.exports = {
  output: {
    path: path.join(dirname, 'build'),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin(webpackConstants.htmlWebpackPlugin)
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['./', 'node_modules', './src']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|gif|jpe?g|svg|pdf|xlsx)$/,
        use: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.mp4$/,
        loader: 'url-loader?limit=10000&mimetype=video/mp4'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.(eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
};
