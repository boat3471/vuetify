import * as components from './components'
import * as directives from './directives'
import Zui from './framework'

export default Zui

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
