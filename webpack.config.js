var webpack = require('webpack');
var path= require("path");

module.exports = {
    entry: [
        "./client/client.js"
    ],
    output: {
        path: './public/dist',
        filename: "bundle.js",
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style-loader!css-loader?modules" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json', ".jsx"],
        root: [
            path.resolve('.')
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};