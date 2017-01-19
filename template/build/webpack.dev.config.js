'use sreict';

let path = require('path');
let webpack = require('webpack');

let devConfig = require('./webpack.base.config');
let config = require('../config');

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    new webpack.NoErrorsPlugin()
]);

// see https://webpack.github.io/docs/webpack-dev-server.html
devConfig.devServer = {
    hot: true,
    noInfo: false,
    quite: false,
    port:3000,
    debug:true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    contentBase:'/',
    publicPath:"/"
};

module.exports = Object.assign({},devConfig,{
    entry: {
        app:[
            "webpack/hot/dev-server",
            "webpack-dev-server/client?http://localhost:3000/",
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../assets/'),
        publicPath:"/",
        sourceMapFilename: '[file].map'
    },
    devtool:'#cheap-module-eval-source-map'
});
