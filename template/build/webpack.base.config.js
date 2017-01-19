'use sreict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let vendor = ['vue'];
let projectRoot = path.resolve(__dirname, '../');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: [
                  path.join(projectRoot, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('vue-style','css')
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file'
            }
        ]
    },
    resolve:{
        extensions:["",".js",".vue"],
        fallback: [path.join(__dirname, '../node_modules')],
        alias:{
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    plugins:[
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"vendor.js"
        })
    ]
};
