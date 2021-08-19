const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, '../../../node_modules/vuetify-loader/');

const fileList = [
  path.resolve(dirPath, 'dev/src/_variables.scss'),
  path.resolve(dirPath, 'dev/src/main.js'),
  path.resolve(dirPath, 'lib/matcher/attr.js'),
  path.resolve(dirPath, 'lib/matcher/generator.js'),
  path.resolve(dirPath, 'lib/matcher/tag.js'),
]

fileList.forEach(filePath => {
  console.info(filePath);
  const content = fs.readFileSync(filePath).toString()
  const newContent = content.replace(/vuetify\//g, '@zwd/z-ui/')
  fs.writeFileSync(filePath, newContent);
})
