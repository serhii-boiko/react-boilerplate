const path = require('path');
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', '..', dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
        },
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: resolve('./public/index.html'),
      filename: resolve('./dist/index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new SimpleProgressWebpackPlugin({
      format: 'minimal',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
