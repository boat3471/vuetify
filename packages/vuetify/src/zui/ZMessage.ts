import Vue, { VueConstructor } from 'vue'
import { ZMessageSingle, ZMessageContainer } from './components'
import { MessageOptions, ShowMessageOptions, ZMessageItem } from '../../types'

/**
 * 消息管理器
 */
class ZMessageCore {
  static __wrapper: Vue

  static __installed = false

  static __instance: ZMessageCore

  static MESSAGE_LIST: ZMessageItem[] = []

  static genWrapper () {
    if (!ZMessageCore.__wrapper) {
      const app = document.getElementById('app')
      const div = document.createElement('div')
      app && app.appendChild(div)
      ZMessageCore.__wrapper = new ZMessageContainer({
      }).$mount(div)
    }
    return ZMessageCore.__wrapper
  }

  static genInstance (): ZMessageCore {
    if (!ZMessageCore.__instance) {
      ZMessageCore.__instance = new ZMessageCore()
    }
    return ZMessageCore.__instance
  }

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    // ignore
  }

  /**
   * 显示消息
   * @param options
   */
  show (options: ShowMessageOptions | string) {
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
  info (message: string, options?: MessageOptions) {
    const container = ZMessageCore.genWrapper()
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
  success (message: string, options?: MessageOptions) {
    const container = ZMessageCore.genWrapper()
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
  warn (message: string, options?: MessageOptions) {
    return this.warning(message, options)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warning (message: string, options?: MessageOptions) {
    const container = ZMessageCore.genWrapper()
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
  error (message: string, options?: MessageOptions) {
    const container = ZMessageCore.genWrapper()
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
    let list = ZMessageCore.MESSAGE_LIST
    if (!list) {
      list = []
      ZMessageCore.MESSAGE_LIST = list
    }
    return list
  }

  install (Vue: VueConstructor) {
    if (ZMessageCore.__installed) return
    ZMessageCore.__installed = true

    Vue.mixin({
      beforeCreate () {
        const $options = this.$options
        if (!this.$message) {
          this.$message = ZMessageCore.genInstance()
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
export const ZMessage = ZMessageCore.genInstance()
