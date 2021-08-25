import { Component, ComponentOptions } from 'vue'
import { GlobalVuetifyPreset } from '../../services/presets'
import { VuetifyUseOptions } from '../../index'

export type ZuiEventType =
  'changeDark'
  | 'changeTheme'
  | 'changePrimaryColor'
  | 'changeThemeColors'
  | 'initMenus'
  | 'menuViewComplete'
  | string;

export type DefaultSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '';

export interface ZuiGlobalPreset extends GlobalVuetifyPreset {
}

export interface ZuiUseOptions extends VuetifyUseOptions {
}

export interface ZuiToolUseOptions {
}

export interface ZuiOptions {
  /**
   * 配置App主DOM节点编号，默认值为：app
   */
  appId?: string

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
  appMain?: Component

  /**
   * 配置App主页，默认值为：null;
   */
  appHome?: Component

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

/**
 * 创建APP选项
 */
export interface CreateAppOptions extends ZuiOptions {
  componentOptions: ComponentOptions<any>
}
