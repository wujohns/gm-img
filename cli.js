#!/usr/bin/env node

/**
 * bin file
 *
 * @author wujohns
 * @date 18/12/26
 */
'use strict';

const _ = require('lodash');
const program = require('commander');
const gmImg = require('./index');

program
    .version('0.0.1')
    .description('a tools to merge images for game maker studio 2')
    .option('-n, --name <name>', 'the name of the result image', 'result')
    .option('-s, --start <start>', 'the index of start image which is sorted by name，start from 0', 1)
    .option('-d, --dir <dir>', 'the dir of the images', process.cwd());

program
    .command('m [imgs...]')
    .description('merge images')
    .action((imgs) => {
        gmImg(
            {
                name: program.name,
                start: program.start,
                dir: program.dir,
                imgs: imgs
            },
            () => console.log('merged!!!')
        );
    });

program.parse(process.argv)