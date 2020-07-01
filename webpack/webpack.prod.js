const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common,{
    mode:'production',
    output:{
        filename:'[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization:{
        minimizer:[
            new OptimiseCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template:'./public/index.html',
                favicon:'./public/favicon.ico',
                minify:{
                    removeComments:true,
                    collapseWhitespace:true,
                    removeAttributeQuotes:true
                }
            })
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contentHash].css'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader, // 3. Extract css into files
                  'css-loader', //  2. turns css into commonjs
                ]
            }
        ]
    }
})