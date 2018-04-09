#!/usr/local/bin/node
const path = require('path');
const karma = require('karma');

let karmaOptions = {
    configFile : path.resolve('./karma.conf.js')
};

let server = new karma.Server(karmaOptions).start()
