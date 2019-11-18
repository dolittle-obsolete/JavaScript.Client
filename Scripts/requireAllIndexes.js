#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const globPattern = 'Source/*/package.json';

if (!fs.existsSync('Source')) {
    console.error('Must execute script from root of project');
    process.exit(1);
}

glob(globPattern, (error, matches) => {
    if (error) throw error;

    matches.forEach(packagePath => {
        let dirName = path.parse(packagePath).dir;
        let indexPath = `..${path.sep}${dirName}${path.sep}Distribution${path.sep}index`;
        require(indexPath);
    });
});
