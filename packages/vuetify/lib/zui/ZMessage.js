import { ZMessageSingle, ZMessageContainer } from './components/ZMessage';
let instance;
/**
 * 消息管理器
 */

export class ZMessageClass {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  static genWrapper() {
    if (!ZMessageClass.__wrapper) {
      const app = document.getElementById(ZMessageClass.appId);
      const div = document.createElement('div');
      app && app.appendChild(div);
      ZMessageClass.__wrapper = new ZMessageContainer({}).$mount(div);
    }

    return ZMessageClass.__wrapper;
  }
  /**
   * 显示消息
   * @param options
   */


  show(options) {
    let content = '';

    if (typeof options !== 'object') {
      content = options + '';
      options = {
        type: 'info',
        message: content,
        icon: 'mdi-information'
      };
    } else {
      content = options.message || '';
    }

    switch (options.type) {
      case 'info':
        return this.info(content, options);

      case 'success':
        return this.success(content, options);

      case 'warn':
      case 'warning':
        return this.warning(content, options);

      case 'error':
        return this.error(content, options);

      default:
        break;
    }
  }
  /**
   * 常规消息
   * @param message
   * @param options
   */


  info(message, options) {
    const container = ZMessageClass.genWrapper();
    const comp = new ZMessageSingle({
      propsData: { ...options,
        message: message || '',
        type: 'info',
        icon: 'mdi-information'
      },
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  }
  /**
   * 成功消息
   * @param message
   * @param options
   */


  success(message, options) {
    const container = ZMessageClass.genWrapper();
    const comp = new ZMessageSingle({
      propsData: { ...options,
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle'
      },
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  }
  /**
   * 告警消息
   * @param message
   * @param options
   */


  warn(message, options) {
    return this.warning(message, options);
  }
  /**
   * 告警消息
   * @param message
   * @param options
   */


  warning(message, options) {
    const container = ZMessageClass.genWrapper();
    const comp = new ZMessageSingle({
      propsData: { ...options,
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle'
      },
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  }
  /**
   * 错误消息
   * @param message
   * @param options
   */


  error(message, options) {
    const container = ZMessageClass.genWrapper();
    const comp = new ZMessageSingle({
      propsData: { ...options,
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle'
      },
      parent: container
    }).$mount();
    container && container.$el.appendChild(comp.$el);
  }

  getMessageList() {
    let list = ZMessageClass.MESSAGE_LIST;

    if (!list) {
      list = [];
      ZMessageClass.MESSAGE_LIST = list;
    }

    return list;
  }

  static genInstance() {
    if (!instance) {
      instance = new ZMessageClass();
    }

    return instance;
  }

}
ZMessageClass.MESSAGE_LIST = [];
ZMessageClass.appId = 'app';
/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {ZMessage} = '@zwd/z-ui';`
 */

export const ZMessage = ZMessageClass.genInstance();
//# sourceMappingURL=ZMessage.js.map