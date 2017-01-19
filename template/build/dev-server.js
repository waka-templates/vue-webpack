'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

let config = require('./webpack.dev.config.js');

let compiler = webpack(config);
let server = new WebpackDevServer(compiler, config.devServer);

server.listen(3000, 'localhost', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('open your browser visit localhost:3000\n');
});
