const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './client/index.js'
    },
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
			template: '!!raw-loader!./server/views/index.ejs',
			filename: '../server/views/index.ejs', //for me, output file is index.ejs only and not
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true
			}
        })
    ]
}
