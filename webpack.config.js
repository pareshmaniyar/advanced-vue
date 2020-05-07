const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require(`vue-loader`);
const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
