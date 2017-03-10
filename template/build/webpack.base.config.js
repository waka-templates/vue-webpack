'use sreict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
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
                test: /\.(swf|eot|svg|ttf|woff|svg)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve:{
        extensions:["",".js",".vue"],
        fallback: [path.join(__dirname, '../node_modules')],
        alias:{
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    vue:{
        postcss: [require('autoprefixer')({
          browsers: ['last 5 versions','Android >= 4.0', 'iOS >= 7']
        })]
    },
    plugins:[
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"vendor.js"
        }),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        })
    ]
};
