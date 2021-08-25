import Vue, { VueConstructor } from 'vue'
import { ZMessageSingle, ZMessageContainer } from './components/ZMessage'
import { ZMessageOptions, ZMessageShowOptions, ZMessageItem } from '../../types'

/**
 * 消息管理器
 */
export class ZMessageClass {
  static __wrapper: Vue

  static __instance: ZMessageClass

  static MESSAGE_LIST: ZMessageItem[] = []

  static genWrapper () {
    if (!ZMessageClass.__wrapper) {
      const app = document.getElementById('app')
      const div = document.createElement('div')
      app && app.appendChild(div)
      ZMessageClass.__wrapper = new ZMessageContainer({
      }).$mount(div)
    }
    return ZMessageClass.__wrapper
  }

  static genInstance (): ZMessageClass {
    if (!ZMessageClass.__instance) {
      ZMessageClass.__instance = new ZMessageClass()
    }
    return ZMessageClass.__instance
  }

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    // ignore
  }

  /**
   * 显示消息
   * @param options
   */
  show (options: ZMessageShowOptions | string) {
    let content = ''
    if (typeof options !== 'object') {
      content = options + ''
      options = {
        type: 'info',
        message: content,
        icon: 'mdi-information',
      }
    } else {
      content = options.message || ''
    }

    switch (options.type) {
      case 'info':
        return this.info(content, options)
      case 'success':
        return this.success(content, options)
      case 'warn':
      case 'warning':
        return this.warning(content, options)
      case 'error':
        return this.error(content, options)
      default:
        break
    }
  }

  /**
   * 常规消息
   * @param message
   * @param options
   */
  info (message: string, options?: ZMessageOptions) {
    const container = ZMessageClass.genWrapper()
    const comp = new ZMessageSingle({
      propsData: {
        ...options,
        message: message || '',
        type: 'info',
        icon: 'mdi-information',
      },
      parent: container,
    }).$mount()
    container && container.$el.appendChild(comp.$el)
  }

  /**
   * 成功消息
   * @param message
   * @param options
   */
  success (message: string, options?: ZMessageOptions) {
    const container = ZMessageClass.genWrapper()
    const comp = new ZMessageSingle({
      propsData: {
        ...options,
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle',
      },
      parent: container,
    }).$mount()
    container && container.$el.appendChild(comp.$el)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warn (message: string, options?: ZMessageOptions) {
    return this.warning(message, options)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warning (message: string, options?: ZMessageOptions) {
    const container = ZMessageClass.genWrapper()
    const comp = new ZMessageSingle({
      propsData: {
        ...options,
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle',
      },
      parent: container,
    }).$mount()
    container && container.$el.appendChild(comp.$el)
  }

  /**
   * 错误消息
   * @param message
   * @param options
   */
  error (message: string, options?: ZMessageOptions) {
    const container = ZMessageClass.genWrapper()
    const comp = new ZMessageSingle({
      propsData: {
        ...options,
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle',
      },
      parent: container,
    }).$mount()
    container && container.$el.appendChild(comp.$el)
  }

  getMessageList (): ZMessageItem[] {
    let list = ZMessageClass.MESSAGE_LIST
    if (!list) {
      list = []
      ZMessageClass.MESSAGE_LIST = list
    }
    return list
  }

  static install (Vue: VueConstructor, options: any) {
    if ((ZMessageClass.install as any).__installed) return
    (ZMessageClass.install as any).__installed = true

    Vue.mixin({
      beforeCreate () {
        const $options = this.$options
        if (!this.$message) {
          this.$message = ZMessageClass.genInstance()
        } else {
          $options.parent && (this.$message = $options.parent.$message)
        }
      },
    })
  }
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {ZMessage} = '@zwd/z-ui';`
 */
export const ZMessage = ZMessageClass.genInstance()
