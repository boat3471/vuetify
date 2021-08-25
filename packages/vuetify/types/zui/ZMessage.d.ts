import { PluginFunction } from 'vue'
import { ZMessageShowOptions, ZMessageItem, ZMessageUseOptions, ZMessageOptions } from './options'

export class ZMessageClass {
  static install: PluginFunction<ZMessageUseOptions>

  show (options: ZMessageShowOptions | string): any

  info (message: string, options?: ZMessageOptions): any

  success (message: string, options?: ZMessageOptions): any

  warn (message: string, options?: ZMessageOptions): any

  warning (message: string, options?: ZMessageOptions): any

  error (message: string, options?: ZMessageOptions): any

  getMessageList (): ZMessageItem[]
}
