"use strict";
const base = require("dolittle.javascript.build/karma.conf.js");
module.exports = (config) => {
    base(config);
    config.set({
        basePath: './Source',
    });
};
