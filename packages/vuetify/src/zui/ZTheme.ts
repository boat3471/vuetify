import { ZThemeDescription } from '../../types/zui/ZTheme'
import { themeStore } from './services'

export class ZThemeClass implements ZThemeDescription {
  get mainNavMiniMode (): boolean {
    return themeStore.mainNavMiniMode || false
  }

  static __instance: ZThemeClass

  static genInstance (): ZThemeClass {
    if (!ZThemeClass.__instance) {
      ZThemeClass.__instance = new ZThemeClass()
    }
    return ZThemeClass.__instance
  }
}

export const ZTheme = ZThemeClass.genInstance()
