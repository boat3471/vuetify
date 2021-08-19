const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const resolve = target => path.resolve(__dirname, target)
const devTargetFolder = '../packages/vuetify/dev'
const devTargetFile = `${devTargetFolder}/Playground.vue`

if (!fs.existsSync(resolve(devTargetFile))) {
  shell.cp(
    resolve(`${devTargetFolder}/Playground.template.vue`),
    resolve(devTargetFile)
  )
}

/* 修正 eslint-plugin-vuetify */
(() => {
  const gridUnknownAttributesPath = path.resolve(__dirname, '..', 'node_modules/eslint-plugin-vuetify/lib/rules/grid-unknown-attributes.js')
  if (fs.existsSync(gridUnknownAttributesPath)) {
    const content = fs.readFileSync(gridUnknownAttributesPath).toString()
    fs.writeFileSync(gridUnknownAttributesPath, content.replace(/vuetify\/es5\/components/g, '@zwd/z-ui/es5/components'))
  }
})()
