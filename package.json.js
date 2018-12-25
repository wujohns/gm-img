/**
 * package.json pre-build file
 *
 * @author wujohns
 * @date 18/12/25
 */
'use strict';

const packageConfig = {
    // basic
    name: 'gm-img',
    version: '0.0.1',
    description: 'a tools to merge images for game maker studio 2',
    homepage: 'https://github.com/wujohns/gm-img',
    license: 'MIT',

    // about repo
    repository: {
        type: 'git',
        url: 'https://github.com/wujohns/gm-img'
    },
    bugs: { url: 'https://github.com/wujohns/gm-img/issues' },

    // keywords
    keywords: ['gm', 'game maker', 'image', 'merge'],

    // entry
    main: 'index.js',

    // cli
    bin: {
        'gmm': 'cli.js'
    },

    // dependencies
    dependencies: {
        'merge-img': '^2.1.2',
        'lodash': '^4.17.10',
        'commander': '^2.9.0'
    }
};

const fs = require('fs');
const path = require('path');
const targetFile = path.join(__dirname, './package.json');
fs.writeFileSync(targetFile, JSON.stringify(packageConfig, null, 2), {
    encoding: 'utf8',
    flags: 'w',
    mode: 0o666
});