const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const resolve = (dir) => path.join(__dirname, '..', '..', dir);

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'source-map',
    cache: false,
    bail: true,
    entry: [
        'babel-polyfill',
        resolve('./src/index.js'),
    ],
    output: {
        path: resolve('./dist/assets'),
        filename: '[name].[hash].bundle.js',
        publicPath: './assets/',
        chunkFilename: 'chunksJS/[id].[name].[hash].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images/'
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                    },
                }
            },
            {
                test: /^.((?!cssmodule).)*\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /^.((?!cssmodule).)*\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            },
            {
                test: /^.((?!cssmodule).)*\.(sass|scss)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: false,
        namedModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: 'chunksCSS/[id].[name].[hash].chunk.css',
        }),
        // new ImageminPlugin({
        //     pngquant: {
        //         quality: '50'
        //     }
        // }),
    ],
    performance: {
        hints: false,
    },
});