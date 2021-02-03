#!/usr/bin/env node

'use strict';

const colors  = require('colors');
const { program } = require('commander');
const { parse } = require('../lib/depsParser');

const version = require('../package.json').version;

const COLOR_THEME = {
  error  : 'red',
  info   : 'blue',
  data   : 'grey',
  header : 'blue',
  warn   : 'yellow',
  em     : 'magenta'
};

colors.setTheme(COLOR_THEME);

program
.version(version)
.description('Help Information.')
.option('-i, --ignore <type>', 'ignored packages will not parse')
// .option('-c, --chart', 'show dependencies tree chart')
.parse(process.argv);

const options = program.opts();

let excludeDeps;
if (options.ignore) {
  excludeDeps = options.ignore.split(',').filter(item => !!item).map(item => item.trim());
  if (!excludeDeps.length) {
    excludeDeps = options.ignore.split(/\s/).filter(item => !!item);
  }
}

const { list, set, map } = parse(excludeDeps);
console.log(list, set, map)