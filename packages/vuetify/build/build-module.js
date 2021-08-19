'use strict'
const shell = require('shelljs')

console.info('------------------------------')
console.info('Start build @zwd/z-ui-module-publish')

shell.cd('../module-publish')
shell.exec('yarn build:module')

console.info('Success build @zwd/z-ui-module-publish')
