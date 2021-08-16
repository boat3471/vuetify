import Vue from 'vue'
// @ts-ignore
import ModalComponent from '../components/modal.vue'
import { UICore } from '../UICore'

/**
 * 是否初始化完成
 * @internal
 */
let initialized = false

/**
 * 弹窗视图组件
 * @internal
 */
const ZModal = Vue.extend(ModalComponent)

/**
 * 弹窗选项基类
 * @internal
 */
export interface ModalOptionsBase {
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
   * 顶部的距离
   */
  top?: number | string

  /**
   * 延迟确认
   */
  delay?: number

  /**
   * 关闭时触发函数
   * @param autoClose 是否自动关闭
   */
  onClose?(autoClose: boolean): void
}

export type ModalType = 'info' | 'success' | 'warn' | 'warning' | 'error' | 'system' | 'confirm';

/**
 * 消息选项
 */
export interface ModalOptions extends ModalOptionsBase {
  /**
   * 弹窗类型: info|success|warn|error
   */
  type?: ModalType
  /**
   * 图标
   */
  icon?: string
}

/**
 * 弹窗结果
 */
export interface ModalResult {
  close: () => ModalResult
  then: (handle: Function) => ModalResult
  catch: (handle: Function) => ModalResult
}

/**
 * 消息核心处理器
 */
export class ZModalCore {
  /**
   * 显示消息
   * @param options
   */
  show (options: ModalOptions | string): ModalResult {
    let propsData: ModalOptions = {
      message: '',
    }
    if (typeof options === 'string') {
      propsData.message = options
    }

    if (typeof options === 'object') {
      propsData = options as ModalOptions
      propsData.top = options.top ? options.top + '' : ''
    }

    const comp = new ZModal({ propsData, parent: UICore.$app }).$mount()
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
  info (message: string, options?: ModalOptionsBase): ModalResult {
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
  success (message: string, options?: ModalOptionsBase): ModalResult {
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
  warn (message: string, options?: ModalOptionsBase): ModalResult {
    return this.warning(message, options)
  }

  /**
   * 告警消息
   * @param message
   * @param options
   */
  warning (message: string, options?: ModalOptionsBase): ModalResult {
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
  error (message: string, options?: ModalOptionsBase): ModalResult {
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
  system (message: string, options?: ModalOptionsBase): ModalResult {
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
  confirm (message: string, options?: ModalOptionsBase): ModalResult {
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
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {modal} = '@zwd/z-ui';`
 */
const core = new ZModalCore()

/**
 * 消息组件安装
 * @internal
 */
function install () {
  if (!initialized) {
    initialized = true
  }

  Vue.prototype.getModalList = function () {
    const w = window as any
    let list = w.__ZUI_MODAL_LIST
    if (!list) {
      list = []
      w.__ZUI_MODAL_LIST = list
    }
    return list
  }

  Vue.mixin({
    beforeCreate () {
      const $options = this.$options
      if ($options.modal) {
        this.$modal = core
      } else {
        $options.parent && (this.$modal = $options.parent.$modal)
      }
    },
  })
}

Vue.use(install)

export { core as modal, install }
