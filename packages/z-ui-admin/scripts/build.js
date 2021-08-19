'use strict'
const shell = require('shelljs')

shell.mkdir('-p', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/dist/', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/es5/', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/lib/', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/src/', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/types/', 'node_modules/@zwd/z-ui')
shell.cp('-R', '../vuetify/package.json', 'node_modules/@zwd/z-ui')
