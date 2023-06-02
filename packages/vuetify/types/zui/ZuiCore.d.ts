import { ZMenuOption, ZuiEventType } from './options'
import { ZMenuDescription } from './ZMenu'
import { IZRouter } from './ZRouter'
import { ZThemeDescription } from './ZTheme'
import { ZAuthDescription } from './ZAuth'
import { ZMessageDescription } from './ZMessage'
import { ZModalDescription } from './ZModal'

export interface ZuiCoreDescription {
  $menu: ZMenuDescription
  $router: IZRouter
  $theme: ZThemeDescription
  $auth: ZAuthDescription
  $message: ZMessageDescription
  $modal: ZModalDescription

  appName: string
  appId: string
  appKey: string
  menus: ZMenuOption[]
  darkStatus: boolean
  defaultSize: string
  defaultTooltipColor: string
  defaultTooltipSize: string

  openHome (): void
  openLogin (): void

  ready (callback: () => void): void

  emit (event: ZuiEventType, ...args: any[]): void
  on (event: ZuiEventType | ZuiEventType[], callback: Function): void
  once (event: ZuiEventType | ZuiEventType[], callback: Function): void
  off (event?: ZuiEventType | ZuiEventType[], callback?: Function): void
}
