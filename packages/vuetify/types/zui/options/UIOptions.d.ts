import { ComponentOptions } from 'vue'
import { RouterOptions } from 'vue-router/types/router'
import { GlobalVuetifyPreset } from '../../services/presets'
import { RouteComponent, VuetifyUseOptions } from '../../index'
import { ZAuthOptions } from './AuthOptions'
import { ZMenuOption } from './MenuOptions'

export type ZuiEventType =
  'changeDark'
  | 'changeTheme'
  | 'changePrimaryColor'
  | 'changeThemeColors'
  | 'initMenus'
  | 'menuViewComplete'
  | 'update-menus'
  | string;

export type DefaultSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '';

export interface ZuiGlobalPreset extends GlobalVuetifyPreset {
}

export interface ZuiUseOptions extends VuetifyUseOptions {
}

export interface ZuiCoreUseOptions {
}

export interface ZuiOptions {
  /**
   * 配置App主DOM节点编号，默认值为：app
   */
  appId?: string

  /**
   * 配置App唯一标示，默认值：com.zpmc.app
   */
  appKey?: string

  /**
   * App名称
   */
  appName?: string

  /**
   * 配置App主DOM节点class，默认值为：z-app
   */
  appClass?: string

  /**
   * 配置App主视图，默认值为：ZApp;
   */
  appMain?: RouteComponent

  /**
   * 配置App主页，默认值为：null;
   */
  appHome?: RouteComponent

  /**
   * 配置UI库全局默认大小;
   */
  defaultSize?: DefaultSize

  /**
   * 配置Tooltip默认颜色;
   */
  defaultTooltipColor?: string

  /**
   * 配置Tooltip默认大小;
   */
  defaultTooltipSize?: string

  /**
   * 自定义Zui选项
   */
  presetOptions?: ZuiGlobalPreset

  /**
   * 安装时选项
   */
  useOptions?: ZuiUseOptions
}

export interface CreateAppRouterOptions {
  /**
   * 配置VueRouter选项
   */
  routerOptions?: RouterOptions

  /**
   * 配置App主页，默认值为：null;
   */
  appHome?: RouteComponent

  /**
   * 配置App主页，默认值为：null;
   */
  appMain?: RouteComponent

  /**
   * 登录（login）页面
   */
  appLogin?: RouteComponent | boolean

  /**
   * 禁止访问（403）页面
   */
  appNotAccess?: RouteComponent | boolean

  /**
   * 找不到（404）页面
   */
  appNotFound?: RouteComponent | boolean

  /**
   * 服务错误（500）页面
   */
  appServerError?: RouteComponent | boolean
}

/**
 * 创建 App 选项
 */
export interface CreateAppOptions extends ZuiOptions {
  componentOptions: ComponentOptions<any>
}

export interface CreateAdminRouterOptions extends CreateAppRouterOptions {
  /**
   * 配置主菜单选项
   */
  menus?: ZMenuOption[]

  /**
   * 根路径重定向地址
   */
  redirect?: string
}

/**
 * 创建 Admin 选项
 */
export interface CreateAdminOptions extends ZuiOptions {
  /**
   * 配置主菜单选项
   */
  menus?: ZMenuOption[]

  /**
   * 根路径重定向地址
   */
  redirect?: string

  /**
   * 配置Vue选项
   */
  componentOptions: ComponentOptions<any>

  /**
   * 认证
   */
  auth?: ZAuthOptions

  /**
   * 打开首页
   */
  openHome?: () => void

  /**
   * 打开登录页面
   */
  openLogin?: () => void
}
