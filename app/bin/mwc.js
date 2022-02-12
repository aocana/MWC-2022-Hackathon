#!/usr/bin/env node

const program = require('commander');
const pkg = require('../../package.json');
const {getAllDevelopers, addDeveloper} = require('../controllers/developerController');
const getInfo = require('../controllers/eventController');

program
    .name('mwc')
    .version(pkg.version)
    .parse(process.argv);

program
    .command('list')
    .alias('l')
    .description('List all developers')
    .action(() => getAllDevelopers());

program
    .command('add')
    .alias('a')
    .description('Add developer to MWC')
    .action(() => addDeveloper());

program
    .command('info')
    .alias('i')
    .description('MWC 2022 Information')
    .action(() => getInfo());

program.parse(process.argv);