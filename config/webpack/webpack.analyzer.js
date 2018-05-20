const merge = require('webpack-merge');
const prodWebpackConfig = require('./webpack.prod.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prodWebpackConfig, {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});