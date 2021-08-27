import { ZAuthOptions, ZMainMenuOption, ThemeColorsOptions, ThemeCustomOptions, ZuiToolUseOptions, ZuiEventType } from './options'
import { PluginFunction } from 'vue'

export class ZuiToolDescription {
  static install: PluginFunction<ZuiToolUseOptions>

  get appName (): string
  get appId (): string
  get menus (): ZMainMenuOption[]
  get auth (): ZAuthOptions
  get darkStatus(): boolean
  get defaultSize(): string
  get defaultTooltipColor(): string
  get defaultTooltipSize(): string

  changeDark(status: boolean): void
  changeThemeColors(options: ThemeColorsOptions): void
  changePrimaryColor (color: string): void
  changeTheme (options: ThemeCustomOptions): void
  getThemeStore (): ThemeCustomOptions
  getPrimaryColor (): string

  openHome (): void
  openLogin (): void

  emit (event: ZuiEventType, ...args: any[]): void
  on (event: ZuiEventType | ZuiEventType[], callback: Function): void
  once (event: ZuiEventType | ZuiEventType[], callback: Function): void
  off (event?: ZuiEventType | ZuiEventType[], callback?: Function): void
}
