import Vue from 'vue'; // @ts-ignore

import ModalComponent from '../components/modal.vue';
import { UICore } from '../UICore';
/**
 * 是否初始化完成
 * @internal
 */

let initialized = false;
/**
 * 弹窗视图组件
 * @internal
 */

const ZModal = Vue.extend(ModalComponent);
/**
 * 消息核心处理器
 */

export class ZModalCore {
  /**
   * 显示消息
   * @param options
   */
  show(options) {
    let propsData = {
      message: ''
    };

    if (typeof options === 'string') {
      propsData.message = options;
    }

    if (typeof options === 'object') {
      propsData = options;
      propsData.top = options.top ? options.top + '' : '';
    }

    const comp = new ZModal({
      propsData,
      parent: UICore.$app
    }).$mount();
    const result = {
      close() {
        comp.closeForceFun();
        return result;
      },

      then(handle) {
        comp.setSureBeforeFun(handle);
        return result;
      },

      catch(handle) {
        comp.setCancelBeforeFun(handle);
        return result;
      }

    };
    return result;
  }
  /**
   * 常规消息
   * @param message
   * @param options
   */


  info(message, options) {
    return this.show({ ...options,
      message: message || '',
      type: 'info',
      icon: 'mdi-information',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    });
  }
  /**
   * 成功消息
   * @param message
   * @param options
   */


  success(message, options) {
    return this.show({ ...options,
      message: message || '',
      type: 'success',
      icon: 'mdi-check-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    });
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
    return this.show({ ...options,
      message: message || '',
      type: 'warning',
      icon: 'mdi-alert-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    });
  }
  /**
   * 错误消息
   * @param message
   * @param options
   */


  error(message, options) {
    return this.show({ ...options,
      message: message || '',
      type: 'error',
      icon: 'mdi-close-circle',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    });
  }
  /**
   * 系统提示
   * @param message
   * @param options
   */


  system(message, options) {
    return this.show({ ...options,
      title: options ? options.title : '提示',
      message: message || '',
      type: 'system',
      labelSure: options ? options.labelSure : '知道了',
      showCancel: false
    });
  }
  /**
   * 确认
   * @param message
   * @param options
   */


  confirm(message, options) {
    return this.show({ ...options,
      message: message || '',
      type: 'confirm'
    });
  }
  /**
   * 关闭所有
   */


  closeAll() {// 关闭所以弹窗;
  }

}
/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {modal} = '@zwd/z-ui';`
 */

const core = new ZModalCore();
/**
 * 消息组件安装
 * @internal
 */

function install() {
  if (!initialized) {
    initialized = true;
  }

  Vue.prototype.getModalList = function () {
    const w = window;
    let list = w.__ZUI_MODAL_LIST;

    if (!list) {
      list = [];
      w.__ZUI_MODAL_LIST = list;
    }

    return list;
  };

  Vue.mixin({
    beforeCreate() {
      const $options = this.$options;

      if ($options.modal) {
        this.$modal = core;
      } else {
        $options.parent && (this.$modal = $options.parent.$modal);
      }
    }

  });
}

Vue.use(install);
export { core as modal, install };
//# sourceMappingURL=ZModalCore.js.map