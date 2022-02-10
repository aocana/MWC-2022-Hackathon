#!/usr/bin/env node

const program = require('commander')
const {prompt} = require('inquirer')
const pkg = require('../../package.json')
const {getAllDevelopers} = require("../controllers/developerController");

program
    .name('mwc')
    .version(pkg.version)
    .parse(process.argv);

program
    .command('list')
    .alias('l')
    .description('List all developers')
    .action(() =>
        getAllDevelopers()
    );

program
    .command('add')
    .alias('a')
    .description('Add developer to MWC')
    .action(() =>
        prompt([
            {
                name: 'name',
                type: 'string',
                message: 'Name'
            },
        ]).then( answers => console.log(answers))
    );

program
    .command('info')
    .alias('i')
    .description('MWC 2022 Information')
    .action(() =>
        console.log("MWC days\n " +
            "28 February, Monday\n " +
            "1 March, Tuesday\n " +
            "2 March, Wednesday\n " +
            "3 March, Thursday\n"
        )
    );

program.parse(process.argv);