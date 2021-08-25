import { PluginFunction } from 'vue'
import { ZModalOptions, ZModalResult, ZModalShowOptions, ZModalUseOptions } from './options'

export class ZModalClass {
  static install: PluginFunction<ZModalUseOptions>

  /**
   * 自定义提示
   * @param options
   */
  show (options: ZModalShowOptions | string): ZModalResult

  /**
   * 常规提示
   * @param message
   * @param options
   */
  info (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 成功提示
   * @param message
   * @param options
   */
  success (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warn (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warning (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 错误提示
   * @param message
   * @param options
   */
  error (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 系统提示
   * @param message
   * @param options
   */
  system (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 确认提示
   * @param message
   * @param options
   */
  confirm (message: string, options?: ZModalOptions): ZModalResult

  /**
   * 关闭所有提示
   */
  closeAll (): void
}
