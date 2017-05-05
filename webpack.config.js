var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    devtool: 'source-map'
};