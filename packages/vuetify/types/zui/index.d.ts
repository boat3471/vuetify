import Vue from 'vue'
import { CreateAppOptions, ThemeColorsOptions, ThemeCustomOptions, AdminAuthOptions, AdminMainMenuOption } from './options'

export * from './options'
export * from './ZMessage'
export * from './ZModal'

export class ZUICore {
  get appName (): string
  get appId (): string
  get menus (): AdminMainMenuOption[]
  get auth (): AdminAuthOptions
  get darkStatus(): boolean
  get defaultSize(): string
  get defaultTooltipColor(): string
  get defaultTooltipSize(): string

  changeDark(status: boolean): void
  changeThemeColors(options: ThemeColorsOptions): void
  changePrimaryColor (color: string): void
  changeTheme (options: ThemeCustomOptions): void
  getThemeOptions (): ThemeCustomOptions
  getPrimaryColor (): string
  openHome (): void
  openLogin (): void
}

export function createApp (options: CreateAppOptions): Vue
