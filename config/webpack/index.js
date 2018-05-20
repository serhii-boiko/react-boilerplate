'use strict';

const development = require('./webpack.dev');
const production = require('./webpack.prod');
const analyzer = require('./webpack.analyzer');

module.exports = {
    development,
    production,
    analyzer,
};
