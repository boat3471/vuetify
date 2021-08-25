/**
 * 弹窗类型
 */
export type ZModalType = 'info' | 'success' | 'warn' | 'warning' | 'error' | 'system' | 'confirm';

/**
 * 弹窗选项
 */
export interface ZModalOptions {
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
export interface ZModalShowOptions extends ZModalOptions {
  /**
   * 弹窗类型: info|success|warn|error
   */
  type?: ZModalType
  /**
   * 图标
   */
  icon?: string
}

export interface ZModalResult {
  close: () => ZModalResult
  then: (handle: Function) => ZModalResult
  catch: (handle: Function) => ZModalResult
}

export interface ZModalUseOptions {
}
