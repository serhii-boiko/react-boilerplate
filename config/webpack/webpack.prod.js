const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { resolve, publicUrlOrPath } = require('./utils')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  cache: false,
  bail: true,
  entry: [resolve('./src/index.js')],
  output: {
    path: resolve('./dist/assets'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: publicUrlOrPath(),
    chunkFilename: 'chunksJS/[id].[name].[contenthash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /^.((?!cssmodule).)*\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: false,
    moduleIds: 'named',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: 'chunksCSS/[id].[name].[contenthash].chunk.css',
    }),
  ],
  performance: {
    hints: false,
  },
});
