const fs = require('fs')
const path = require('path')

const cssPath = path.resolve(__dirname, '../styles/icons/mdi/index.min.css')
const cssContent = fs.readFileSync(cssPath).toString()
const classList = cssContent.match(/(\.mdi-)([0-9a-z-]+)(::before)/g).map(i => i.replace('::before', '').replace('.mdi-', 'mdi-'))

const keywordMap = {}
const keywordList = []

classList.forEach(i => {
  const keys = (i || '').split('-')
  keys.forEach(k => {
    if (k === 'mdi') {
      return
    }
    if (!isNaN(k)) {
      return
    }
    if (!keywordMap[k]) {
      keywordList.push(k)
      keywordMap[k] = true
    }
  })
})

const contentList = [
  `export const MDI_ICONS = [${classList.map(i => '\'' + i + '\'').join(', ')}]`,
  '',
  `export const MDI_KEYWORDS = [${keywordList.sort().map(i => '\'' + i + '\'').join(', ')}]`,
  '',
]

const outDir = path.resolve(__dirname, '../dist/mdi');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}
fs.writeFileSync(
  path.resolve(outDir, 'index.js'),
  contentList.join('\n')
)
