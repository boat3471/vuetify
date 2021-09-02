import { ZModalOptions, ZModalResultOptions, ZModalShowOptions } from '../../types'

import { ZModalSingle } from './components/ZModal'

/**
 * 消息管理器
 */
export class ZModalClass {
  static __instance: ZModalClass

  static MODAL_LIST: any[] = []

  static genInstance (): ZModalClass {
    if (!ZModalClass.__instance) {
      ZModalClass.__instance = new ZModalClass()
    }
    return ZModalClass.__instance
  }

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    // ignore
  }

  /**
   * 显示消息
   * @param options
   */
  show (options: ZModalShowOptions | string): ZModalResultOptions {
    let propsData: ZModalOptions = {
      message: '',
    }
    if (typeof options === 'string') {
      propsData.message = options
    }

    if (typeof options === 'object') {
      propsData = options as ZModalOptions
      propsData.top = options.top ? options.top + '' : ''
    }

    const comp = new ZModalSingle({
      propsData,
    }).$mount()
    const result = {
      close () {
        (comp as any).closeForceFun()
        return result
      },
      then (handle: Function) {
        (comp as any).setSureBeforeFun(handle)
        return result
      },
      catch (handle: Function) {
        (comp as any).setCancelBeforeFun(handle)
        return result
      },
    }
    return result
  }

  /**
   * 常规消息
   * @param message
   * @param options
   */
  info (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      message: message || '',
      type: 'info',
      icon: 'mdi-information',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false,
    })
  }

  /**
   * 成功消息
   * @param message
   * @param options
   */
  success (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      message: message || '',
      type: 'success',
      icon: 'mdi-check-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false,
    })
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warn (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.warning(message, options)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warning (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      message: message || '',
      type: 'warning',
      icon: 'mdi-alert-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false,
    })
  }

  /**
   * 错误消息
   * @param message
   * @param options
   */
  error (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      message: message || '',
      type: 'error',
      icon: 'mdi-close-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false,
    })
  }

  /**
   * 系统提示
   * @param message
   * @param options
   */
  system (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      title: options ? options.title : '提示',
      message: message || '',
      type: 'system',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false,
    })
  }

  /**
   * 确认
   * @param message
   * @param options
   */
  confirm (message: string, options?: ZModalOptions): ZModalResultOptions {
    return this.show({
      ...options,
      message: message || '',
      type: 'confirm',
      // icon: 'mdi-help-circle-outline',
    })
  }

  /**
   * 关闭所有
   */
  closeAll () {
    // 关闭所以弹窗;
  }

  getModalList (): any[] {
    let list = ZModalClass.MODAL_LIST
    if (!list) {
      list = []
      ZModalClass.MODAL_LIST = list
    }
    return list
  }
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {ZModal} = '@zwd/z-ui';`
 */
export const ZModal = ZModalClass.genInstance()
