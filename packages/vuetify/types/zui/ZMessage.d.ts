import { VNode } from 'vue'

export type MessageType = 'info' | 'success' | 'warn' | 'warning' | 'error';

export interface ZMessageItem {
  id: number
  duration: number
  index: number
  vnode: VNode
  el: HTMLDivElement
}

/**
 * 消息选项基类
 * @internal
 */
export interface MessageOptions {
  /**
   * 消息内容
   */
  message?: string
  /**
   * 持续时间，默认值为5000毫秒，为 0 时则不自动关闭
   */
  duration?: number
  /**
   * 自定义样式
   */
  itemClass?: string
  /**
   * 是否显示关闭按钮，默认显示
   */
  showClose?: boolean

  /**
   * 关闭时触发函数
   * @param autoClose 是否自动关闭
   */
  onClose? (autoClose: boolean): void
}

/**
 * 消息选项
 */
export interface ShowMessageOptions extends MessageOptions {
  /**
   * 弹窗类型: info|success|warn|error
   */
  type: MessageType
  /**
   * 图标
   */
  icon: string
}

export class ZMessage {
  show (options: ShowMessageOptions | string): any
  info (message: string, options?: MessageOptions): any
  success (message: string, options?: MessageOptions): any
  warn (message: string, options?: MessageOptions): any
  warning (message: string, options?: MessageOptions): any
  error (message: string, options?: MessageOptions): any
  getMessageList (): ZMessageItem[]
}
