'use strict';

let path = require('path');

export default {
    dev:{
        env: require('./dev.env.js');
    },
    prod:{
        env: require('./prod.env.js');
    }
}
