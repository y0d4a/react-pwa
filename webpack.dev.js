const HTMLWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    'style-loader', // inject scripts of css code into DOM
                    'css-loader', // convert CSS into CommonJS
                    'sass-loader' // convert SCSS to CSS
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        publicPath: '/',
        port: 3000,
        proxy: {
            '/api-v1': 'http://localhost:12000/',
            secure: false
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './shared/index.html'
        })
    ]
});
