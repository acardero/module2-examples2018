const cows = require('cows');
const myCows = cows();
const chalk = require('chalk');
const log = console.log;

log(chalk.red(myCows[10]));

//myCows.forEach((cow)=>console.log(chalk.blue(cow)));