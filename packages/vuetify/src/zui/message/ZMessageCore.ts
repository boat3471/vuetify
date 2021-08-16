import Vue from 'vue'
// @ts-ignore
import MessageComponent from '../components/message.vue'
import { zMessageContainer } from '../../components/ZMessage'

/**
 * 消息视图组件
 * @internal
 */
const ZMessage = Vue.extend(MessageComponent)

/**
 * 消息选项基类
 * @internal
 */
export interface MessageOptionsBase {
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
  onClose?(autoClose: boolean): void
}

export type MessageType = 'info' | 'success' | 'warn' | 'warning' | 'error';

/**
 * 消息选项
 */
export interface MessageOptions extends MessageOptionsBase {
  /**
   * 弹窗类型: info|success|warn|error
   */
  type: MessageType
  /**
   * 图标
   */
  icon: string
}

/**
 * 消息核心处理器
 */
export class ZMessageCore {
  /**
   * 显示消息
   * @param options{MessageOptions|string}
   */
  show (options: MessageOptions | string) {
    const content = typeof options === 'string' ? options : (options.message || '')
    if (options && typeof options !== 'string') {
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
  }

  /**
   * 常规消息
   * @param message
   * @param options
   */
  info (message: string, options?: MessageOptionsBase) {
    const comp = new ZMessage({
      propsData: {
        ...options,
        message: message || '',
        type: 'info',
        icon: 'mdi-information',
      },
      parent: zMessageContainer,
    }).$mount()
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el)
  }

  /**
   * 成功消息
   * @param message
   * @param options
   */
  success (message: string, options?: MessageOptionsBase) {
    const comp = new ZMessage({
      propsData: {
        ...options,
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle',
      },
      parent: zMessageContainer,
    }).$mount()
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warn (message: string, options?: MessageOptionsBase) {
    return this.warning(message, options)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warning (message: string, options?: MessageOptionsBase) {
    const comp = new ZMessage({
      propsData: {
        ...options,
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle',
      },
      parent: zMessageContainer,
    }).$mount()
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el)
  }

  /**
   * 错误消息
   * @param message
   * @param options
   */
  error (message: string, options?: MessageOptionsBase) {
    const comp = new ZMessage({
      propsData: {
        ...options,
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle',
      },
      parent: zMessageContainer,
    }).$mount()
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el)
  }
}
