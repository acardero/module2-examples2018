const chalk = require('chalk');
const log = console.log;


log(chalk.blue('Hello, npm!'));
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.bold('Hello world!'));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);