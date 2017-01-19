'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

let config = require('./webpack.dev.config.js');

let compiler = webpack(config);
let server = new WebpackDevServer(compiler);

server.listen(3000);
