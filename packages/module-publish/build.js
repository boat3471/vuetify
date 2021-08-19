const fs = require('fs')
const path = require('path')

const distPath = path.resolve(__dirname, 'dist')

fs.readdirSync(distPath).forEach(file => {
  if (/vendor\.[0-9a-z]{8}\.js/.test(file)) {
    const vendorPath = path.resolve(distPath, file)
    const vendor = fs.readFileSync(vendorPath).toString()
    const content = vendor.replace(/export{.+}/, (a, b) => {
      const s1 = a.replace(/ [a-zA-Z],/, ' vue,').replace(/ [a-zA-Z]}/, ' vuetify}')
      const s2 = a.replace(/ [a-zA-Z],/, ' Vue,').replace(/ [a-zA-Z]}/, ' Vuetify}')
      return `${a};${s1};${s2}`
    })
    const pkg = require('../vuetify/package.json')
    fs.writeFileSync(path.resolve(distPath, `z-ui.${pkg.version}.js`), content)
    // export{Cn as V,Er as a};
  }
})
