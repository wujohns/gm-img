#!/usr/bin/env node

/**
 * bin file
 *
 * @author wujohns
 * @date 18/12/26
 */
'use strict';

const _ = require('lodash');
const path = require('path')
const program = require('commander');
const gmImg = require('./index');

program
    .version('0.0.4')
    .description('a tools to merge images for game maker studio 2')
    .option('-n, --name <name>', 'the name of the result image', 'result')
    .option('-s, --start <start>', 'the index of start image which is sorted by name，start from 0', 1)
    .option('-d, --dir <dir>', 'the dir of the images', process.cwd());

program
    .command('* <dir> <name>')
    .description('merge images')
    .action((dir, name) => {
        dir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
        gmImg(
            {
                name: name || program.name,
                start: program.start,
                dir: dir
            },
            () => console.log('merged!!!')
        );
    });

program
    .command('m [imgs...]')
    .description('merge images')
    .action((imgs) => {
        let dir = program.dir;
        dir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
        gmImg(
            {
                name: program.name,
                start: program.start,
                dir: dir,
                imgs: imgs
            },
            () => console.log('merged!!!')
        );
    });

program.parse(process.argv)