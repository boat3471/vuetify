import { PluginFunction } from 'vue'
import { ZModalOptions, ZModalResultOptions, ZModalShowOptions, ZModalUseOptions } from './options'

export class ZModalDescription {
  static install: PluginFunction<ZModalUseOptions>

  /**
   * 自定义提示
   * @param options
   */
  show (options: ZModalShowOptions | string): ZModalResultOptions

  /**
   * 常规提示
   * @param message
   * @param options
   */
  info (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 成功提示
   * @param message
   * @param options
   */
  success (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warn (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warning (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 错误提示
   * @param message
   * @param options
   */
  error (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 系统提示
   * @param message
   * @param options
   */
  system (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 确认提示
   * @param message
   * @param options
   */
  confirm (message: string, options?: ZModalOptions): ZModalResultOptions

  /**
   * 关闭所有提示
   */
  closeAll (): void
}
