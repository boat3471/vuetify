import { Zui } from './framework'
import { createApp } from './zui/createApp'
import { createAdmin } from './zui/createAdmin'
import { createMenus } from './zui/createMenus'
import { createRouter, createAdminRouter } from './zui/createRouter'
import { ZMessageClass } from './zui/ZMessage'
import { ZModalClass } from './zui/ZModal'
import { ZuiCoreClass } from './zui/ZuiCore'
import { ZMenuClass } from './zui/ZMenu'
import { ZThemeClass } from './zui/ZTheme'
import { ZRouterClass } from './zui/ZRouter'

// ZUI Styles
import './zui/styles/main.scss'

if (typeof window !== 'undefined') {
  window.Vue && window.Vue.use(Zui)
}

export default {
  Zui,
  createApp,
  createAdmin,
  createMenus,
  createRouter,
  createAdminRouter,
  get ZuiCore (): ZuiCoreClass {
    return ZuiCoreClass.genInstance()
  },
  get ZMessage (): ZMessageClass {
    return ZuiCoreClass.genInstance().$message
  },
  get ZModal (): ZModalClass {
    return ZuiCoreClass.genInstance().$modal
  },
  get ZMenu (): ZMenuClass {
    return ZuiCoreClass.genInstance().$menu
  },
  get ZTheme (): ZThemeClass {
    return ZuiCoreClass.genInstance().$theme
  },
  get ZRouter (): ZRouterClass {
    return ZuiCoreClass.genInstance().$router
  },
}
