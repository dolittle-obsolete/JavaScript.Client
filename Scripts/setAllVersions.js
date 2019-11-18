#!/usr/bin/env node

const fs = require('fs-extra');
const glob = require('glob');

const version = process.argv[2];
const globPattern = 'Source/*/package.json';

if (!version) {
    console.error("Missing version string as argument");
    process.exit(1);
}
if (!fs.existsSync('Source')) {
    console.error('Must execute script from root of project');
    process.exit(1);
}

glob(globPattern, (error, matches) => {
    if (error) throw error;

    matches.forEach(_ => {
        let packageObj = fs.readJsonSync(_);
        packageObj.version = version;
        fs.writeJsonSync(_, packageObj, {spaces: 2});
    });
});
