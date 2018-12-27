/**
 * entry file
 *
 * @author wujohns
 * @date 18/12/26
 */
'use strict';

const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const mergeImg = require('merge-img');

module.exports = (config, callback) => {
    config = _.defaults({}, config, {
        name: 'result',
        start: 1,
        dir: process.cwd(),
        imgs: []
    });
    const imgs = config.imgs;

    let len, sortedFiles;
    if (!_.isEmpty(imgs)) {
        // input the image one by one
        len = imgs.length;
        sortedFiles = imgs;
    } else {
        // from a dir;
        const files = fs.readdirSync(config.dir);
        len = files.length;

        let start = config.start;
        if (start >= len) {
            start = 1
        }
        sortedFiles = [];
        for (let i = start; i < len; i++) {
            sortedFiles.push(path.join(config.dir, files[i]));
        }
        for (let i = 0; i < start; i++) {
            sortedFiles.push(path.join(config.dir, files[i]));
        }
    }

    // merge files
    mergeImg(sortedFiles).then((rtImg) => {
        rtImg.write(`${config.name}_strip${len}.png`, callback);
    })
};