'use sreict';

let path = require('path');
let webpack = require('webpack');

let prodConfig = require('./webpack.base.config');
let config = require('../config');

prodConfig.plugins = (prodConfig.plugins || []).concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    new webpack.DefinePlugin({
        'process.env': config.prod.env
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: true,
        mangle: true
    })
]);

module.exports = Object.assign({},prodConfig,{
    entry: {
        app:[path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/'),
        sourceMapFilename: '[file].map'
    },
    devtool:'#source-map'
});