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
import { ZIconLoader } from './zui/ZIconLoader'
import { colors } from './util/colors'
import * as ZColorUtils from './util/colorUtils'

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
  ZIconLoader,
  ZColorUtils,
  get $zui (): ZuiCoreClass {
    return ZuiCoreClass.genInstance()
  },
  get ZuiCore (): ZuiCoreClass {
    return ZuiCoreClass.genInstance()
  },
  get $message (): ZMessageClass {
    return ZuiCoreClass.genInstance().$message
  },
  get ZMessage (): ZMessageClass {
    return ZuiCoreClass.genInstance().$message
  },
  get $modal (): ZModalClass {
    return ZuiCoreClass.genInstance().$modal
  },
  get ZModal (): ZModalClass {
    return ZuiCoreClass.genInstance().$modal
  },
  get $menu (): ZMenuClass {
    return ZuiCoreClass.genInstance().$menu
  },
  get ZMenu (): ZMenuClass {
    return ZuiCoreClass.genInstance().$menu
  },
  get $theme (): ZThemeClass {
    return ZuiCoreClass.genInstance().$theme
  },
  get ZTheme (): ZThemeClass {
    return ZuiCoreClass.genInstance().$theme
  },
  get $router (): ZRouterClass {
    return ZuiCoreClass.genInstance().$router
  },
  get ZRouter (): ZRouterClass {
    return ZuiCoreClass.genInstance().$router
  },
  get ZColors (): any {
    return colors
  },
  getComponent(name: string): any {
    return Zui.Components[name]
  },
}
