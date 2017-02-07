'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha','chai'],

        // list of files / patterns to load in the browser
        files: ['./unit/**/*.spec.js'],

        plugins: [
         'karma-chrome-launcher',
         'karma-mocha',
         'karma-sourcemap-loader',
         'karma-webpack',
         'karma-mocha-reporter',
         'karma-chai'
       ],

        preprocessors: {
          './unit/**/*.spec.js': ['webpack','sourcemap']
        },

        reporters: ['progress','mocha'],

        mochaReporter: {
              colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
              },
              symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
              }
        },

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // start these browsers
        browsers: ['Chrome','Chrome_without_security'],

        customLaunchers: {
            Chrome_without_security: {
                    base: 'Chrome',
                    flags: ['--disable-web-security']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // webpack配置
        webpack: {
            devtool: 'inline-source-map',
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

        webpackServer: {
            noInfo: true
        }
    })
};
