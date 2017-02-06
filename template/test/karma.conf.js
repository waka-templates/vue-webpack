'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha','chai'],

        // list of files / patterns to load in the browser
        files: ['./unit/**/*.spec.js'],

        preprocessors: {
          './unit/**/*.spec.js': ['webpack']
        },

        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // start these browsers
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // webpack配置
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    }
                ]
            },
            resolve:{
                extensions:["",".js",".vue"],
                fallback: [path.join(__dirname, '../node_modules')],
                alias:{
                    '@src': path.resolve(__dirname, '../src'),
                    '@components': path.resolve(__dirname, '../src/components'),
                    'vue': 'vue/dist/vue.js'
                }
            },
            plugins: [
                new webpack.DefinePlugin({
                  'process.env': require('../config/test.env')
                })
            ]
        },

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    })
};
