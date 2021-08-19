'use strict'
const shell = require('shelljs')

console.info('------------------------------')
console.info('Start build @zwd/z-ui-api-generator')

shell.mkdir('-p', 'dist/json')
shell.cd('../api-generator')
shell.exec('yarn build:json')
shell.mv('dist/tags.json', '../vuetify/dist/json')
shell.mv('dist/attributes.json', '../vuetify/dist/json')
shell.mv('dist/web-types.json', '../vuetify/dist/json')

console.info('Success build @zwd/z-ui-api-generator')
