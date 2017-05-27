'use strict';

const server = require('./server');
const watch = require('./watch');

const options = require('command-line-args')([
  { name: 'proxy',  alias: 'x', type: String },
  { name: 'port',   alias: 'p', type: Number },
  { name: 'static', alias: 'o', type: Boolean },
  { name: 'tunnel', alias: 't', type: String },
  { name: 'ssl',    alias: 's', type: Boolean }
]);

server(options, watch);
