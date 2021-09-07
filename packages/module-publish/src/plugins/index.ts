import { Plugin } from 'vite'
import { RenderedChunk } from 'rollup'

export function transformImportModule (options: {vue: '', zui: ''}): Plugin {
  return {
    name: 'z-transform-import-module',
    renderChunk (a: string, b: RenderedChunk) {
      let exportBody = ''
      b.imports.forEach((mod, index) => {
        const reg = new RegExp(`import require\\$\\$${index} from ['"]${mod}['"];`)
        let modUrl = ''
        let exportName = ''
        switch (mod) {
          case 'vue':
            modUrl = `//10.128.230.53/webv-public/ui/vue.${options.vue}.module.js`
            exportName = 'Vue'
            exportBody += `export {require$$${index} as ${exportName}};`
            break
          case '@zwd/z-ui':
            modUrl = `//10.128.230.53/webv-public/ui/zui.${options.zui}.module.js`
            exportName = 'Zui'
            break
          default:
            break
        }
        const content = `import {${exportName} as require$$$$${index}} from '${modUrl}';`
        a = a.replace(reg, content)
      })
      return a + exportBody
    },
  }
}
