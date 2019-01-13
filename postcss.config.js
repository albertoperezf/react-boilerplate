/* eslint-disable import/no-extraneous-dependencies */

const precss = require('precss');
const postcssFocus = require('postcss-focus');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const postcssReporter = require('postcss-reporter');

module.exports = {
  plugins: [
    precss(),
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    cssnano({
      reduceIdents: false,
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
};
