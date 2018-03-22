var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: 'development',
    entry: __dirname + '/app/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};