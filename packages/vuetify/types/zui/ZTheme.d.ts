import { ZColorsOptions, ZThemeColorsOptions, ZThemeCustomOptions, ZuiGlobalPreset } from './options'

export interface ZThemeDescription {
  themeStore: ZThemeCustomOptions
  mainNavMiniMode: boolean
  darkStatus: boolean

  /**
   * 设置皮肤，可以只更新皮肤局部选项
   * @param options
   */
  settingTheme (options: ZThemeCustomOptions): void

  /**
   * 设置暗色调颜色配置
   * @param options
   */
  settingDarkColor (options: ZColorsOptions): void

  /**
   * 设置亮色调颜色配置
   * @param options
   */
  settingLightColor (options: ZColorsOptions): void

  /**
   * 改变主题颜色
   * @param options
   */
  settingThemeColors (options: ZThemeColorsOptions): void

  /**
   * 设置关键主题色，会区别当前色调
   */
  settingPrimaryColor (color: string): void

  /**
   * 改变主题暗色
   */
  settingDarkStatus (status: boolean): void

  /**
   * 获取主颜色
   */
  getPrimaryColor (): string

  getDefaultPreset (): ZuiGlobalPreset
}
