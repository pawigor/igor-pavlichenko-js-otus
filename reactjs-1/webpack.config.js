const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /(\.tsx?|\.jsx?)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};