'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        port: 3000
    },
    build:{
        env: require('./prod.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/'
    }
}
