export interface ZColorsOptions {
  primary?: string
  secondary?: string
  accent?: string
  error?: string
  info?: string
  success?: string
  warning?: string
}

export interface ZThemeColorsOptions {
  darkColors?: ZColorsOptions
  lightColors?: ZColorsOptions
}

/**
 * 自定义主题选项
 */
export interface ZThemeCustomOptions {
  /** 照相模式，隐藏 AppBar 和 AppFooter，将主导航固定为mini模式 */
  cameraModel?: boolean
  /** 控制 AppFooter 显示隐藏 */
  footerVisible?: boolean
  /** 控制 AppBar 显示隐藏 */
  appBarVisible?: boolean
  darkColors?: ZColorsOptions
  lightColors?: ZColorsOptions

  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  errorColor?: string
  infoColor?: string
  successColor?: string
  warningColor?: string

  /**
   * 开启暗色调
   */
  darkStatus?: boolean

  /**
   * 紧凑模式, 将会影响所有组件的紧凑模式
   * 1. true: 开启紧凑模式
   * 2. false: 关闭紧凑模式
   */
  denseMode?: boolean

  /**
   * 主菜单宽度
   */
  mainMenuWidth?: number

  /**
   * 主菜单展开模式
   * 1. true: 允许展开多个
   * 2. false: 只能展开一个
   */
  mainMenuExpandMode?: boolean

  /**
   * 主导航(抽屉)模式:
   * 1. 'flex': 只能将菜单收缩起来, 将出现浮动菜单
   * 2. 'visible': 在顶部栏左侧出现一个按钮控制菜单的显示和隐藏
   */
  mainNavMode?: string

  /**
   * 主导航(抽屉)显示位置
   * 1. 在顶部栏下方
   * 2. 在顶部栏左侧
   */
  mainNavPosition?: boolean

  /**
   * 主导航(抽屉)是否收起, 只会在mini模式时作用
   */
  mainNavMiniMode?: boolean

  /**
   * 主导航(抽屉)是否隐藏, 只会在非mini模式时作用
   */
  mainNavVisible?: boolean
}
