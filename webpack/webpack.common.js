const path = require('path')
module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|gif|jpg|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]', 
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    }

}