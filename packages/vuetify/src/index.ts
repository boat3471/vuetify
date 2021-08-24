import * as components from './components'
import * as directives from './directives'
import Zui from './framework'
import { ZMessage, ZModal } from './zui'

export { Zui, ZMessage, ZModal }

// @ts-ignore
window.ZMessage = ZMessage
// @ts-ignore
window.ZModal = ZModal

const install = Zui.install

Zui.install = (Vue, args) => {
  install.call(Zui, Vue, {
    components,
    directives,
    ...args,
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Zui)
}
