import { AdminAuthOptions, AdminMainMenuOption, ThemeColorsOptions, ThemeCustomOptions } from './options'

export class ZuiCore {
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
