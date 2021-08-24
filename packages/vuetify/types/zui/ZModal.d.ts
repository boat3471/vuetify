/**
 * 弹窗类型
 */
export type ModalType = 'info' | 'success' | 'warn' | 'warning' | 'error' | 'system' | 'confirm';

/**
 * 弹窗选项
 */
export interface ModalOptions {
  /**
   * 标题
   */
  title?: string

  /**
   * 消息内容
   */
  message?: string

  /**
   * 消息内容是否使用html格式
   */
  html?: boolean

  /**
   * 是否显示取消按钮
   */
  showCancel?: boolean

  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean

  /**
   * 取消按钮文本
   */
  labelCancel?: string

  /**
   * 确认按钮文本
   */
  labelSure?: string

  /**
   * 关闭时触发函数
   * @param autoClose 是否自动关闭
   */
  onClose? (autoClose: boolean): void

  /**
   * 顶部的距离
   */
  top?: number | string

  /**
   * 延迟确认
   */
  delay?: number
}

/**
 * 弹窗选项，调用 ZModal.show 时的 options
 */
export interface ShowModalOptions extends ModalOptions {
  /**
   * 弹窗类型: info|success|warn|error
   */
  type?: ModalType
  /**
   * 图标
   */
  icon?: string
}

export interface ModalResult {
  close: () => ModalResult
  then: (handle: Function) => ModalResult
  catch: (handle: Function) => ModalResult
}

export class ZModal {
  /**
   * 自定义提示
   * @param options
   */
  show (options: ShowModalOptions | string): ModalResult

  /**
   * 常规提示
   * @param message
   * @param options
   */
  info (message: string, options?: ModalOptions): ModalResult

  /**
   * 成功提示
   * @param message
   * @param options
   */
  success (message: string, options?: ModalOptions): ModalResult

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warn (message: string, options?: ModalOptions): ModalResult

  /**
   * 告警提示
   * @param message
   * @param options
   */
  warning (message: string, options?: ModalOptions): ModalResult

  /**
   * 错误提示
   * @param message
   * @param options
   */
  error (message: string, options?: ModalOptions): ModalResult

  /**
   * 系统提示
   * @param message
   * @param options
   */
  system (message: string, options?: ModalOptions): ModalResult

  /**
   * 确认提示
   * @param message
   * @param options
   */
  confirm (message: string, options?: ModalOptions): ModalResult

  /**
   * 关闭所有提示
   */
  closeAll (): void
}
