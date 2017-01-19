'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js')
    },
    prod:{
        env: require('./prod.env.js')
    }
}
