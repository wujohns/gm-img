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
const mergeImg = requrie('merge-img');

program
    .version('0.0.1')
    .option('')
    .parse(process.argv)

