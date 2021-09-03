import { Zui } from './framework'
import { ZMessage } from './zui/ZMessage'
import { ZModal } from './zui/ZModal'
import { ZuiCore } from './zui/ZuiCore'
import { createApp } from './zui/createApp'
import { createAdmin } from './zui/createAdmin'
import { createMenus } from './zui/createMenus'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Zui)
}

export default {
  Zui,
  ZuiCore,
  ZMessage,
  ZModal,
  get ZMenu () {
    return ZuiCore.$menu
  },
  get ZTheme () {
    return ZuiCore.$theme
  },
  get ZRouter () {
    return ZuiCore.$router
  },
  createApp,
  createAdmin,
  createMenus,
}
