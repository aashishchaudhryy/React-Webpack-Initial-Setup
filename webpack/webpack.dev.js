const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {

    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        hot:true,
        open:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            }
        ]
    }
})