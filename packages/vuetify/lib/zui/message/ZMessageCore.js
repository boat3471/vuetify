import Vue from 'vue'; // @ts-ignore

import MessageComponent from '../components/message.vue';
import { zMessageContainer } from '../../components/ZMessage';
/**
 * 消息视图组件
 * @internal
 */

const ZMessage = Vue.extend(MessageComponent);
/**
 * 消息核心处理器
 */

export class ZMessageCore {
  /**
   * 显示消息
   * @param options{MessageOptions|string}
   */
  show(options) {
    const content = typeof options === 'string' ? options : options.message || '';

    if (options && typeof options !== 'string') {
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
  }
  /**
   * 常规消息
   * @param message
   * @param options
   */


  info(message, options) {
    const comp = new ZMessage({
      propsData: { ...options,
        message: message || '',
        type: 'info',
        icon: 'mdi-information'
      },
      parent: zMessageContainer
    }).$mount();
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el);
  }
  /**
   * 成功消息
   * @param message
   * @param options
   */


  success(message, options) {
    const comp = new ZMessage({
      propsData: { ...options,
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle'
      },
      parent: zMessageContainer
    }).$mount();
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el);
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
    const comp = new ZMessage({
      propsData: { ...options,
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle'
      },
      parent: zMessageContainer
    }).$mount();
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el);
  }
  /**
   * 错误消息
   * @param message
   * @param options
   */


  error(message, options) {
    const comp = new ZMessage({
      propsData: { ...options,
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle'
      },
      parent: zMessageContainer
    }).$mount();
    zMessageContainer && zMessageContainer.$el.appendChild(comp.$el);
  }

}
//# sourceMappingURL=ZMessageCore.js.map