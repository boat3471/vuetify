import { Zui } from './framework'
import { ZMessage } from './zui/ZMessage'
import { ZModal } from './zui/ZModal'
import { ZMenu } from './zui/ZMenu'
import { ZTheme } from './zui/ZTheme'
import { ZRouter } from './zui/ZRouter'
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
  ZMenu,
  ZTheme,
  ZRouter,
  createApp,
  createAdmin,
  createMenus,
}
