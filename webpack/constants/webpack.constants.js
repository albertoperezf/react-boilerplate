const path = require('path');

module.exports = {
  dirname: path.resolve(__dirname, '../../'),
  sassLoaders: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader'
    },
    {
      loader: 'sass-loader'
    }
  ],
  vendors: [
    'babel-polyfill',
    'react',
    'react-dom',
    'react-redux',
    'redux'
  ],
  get htmlWebpackPlugin() {
    return {
      filename: 'index.html',
      path: path.join(this.dirname, 'build'),
      template: path.join(this.dirname, 'index.ejs')
    };
  }
};
