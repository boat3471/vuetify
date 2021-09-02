import { PluginFunction, VueConstructor } from 'vue'
import { ZAuthOptions, ZMenuOption, ZThemeColorsOptions, ZThemeCustomOptions, ZuiCoreUseOptions, ZuiEventType } from './options'
import { ZMenuDescription } from './ZMenu'
import { ZRouterDescription } from './ZRouter'
import { ZThemeDescription } from './ZTheme'

export interface ZuiCoreDescription {
  $menu: ZMenuDescription
  $router: ZRouterDescription
  $theme: ZThemeDescription

  appName: string
  appId: string
  menus: ZMenuOption[]
  auth: ZAuthOptions
  darkStatus: boolean
  defaultSize: string
  defaultTooltipColor: string
  defaultTooltipSize: string

  changeDark(status: boolean): void
  changeThemeColors(options: ZThemeColorsOptions): void
  changePrimaryColor (color: string): void
  changeTheme (options: ZThemeCustomOptions): void
  getThemeStore (): ZThemeCustomOptions
  getPrimaryColor (): string

  /**
   * 重置所有菜单激活状态
   */
  resetMenusActive (menus?: ZMenuOption[]): void

  /**
   * 根据展开模式，更新菜单激活状态
   * @param menu
   */
  updateMenusActiveByExpandMode (menu: ZMenuOption): void
  /**
   * 子级是否有选中的菜单
   * @param menu
   */
  isActiveChildren (menu: ZMenuOption): boolean

  openHome (): void
  openLogin (): void

  emit (event: ZuiEventType, ...args: any[]): void
  on (event: ZuiEventType | ZuiEventType[], callback: Function): void
  once (event: ZuiEventType | ZuiEventType[], callback: Function): void
  off (event?: ZuiEventType | ZuiEventType[], callback?: Function): void
}
