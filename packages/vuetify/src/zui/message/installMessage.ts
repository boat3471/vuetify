import Vue from 'vue'
import { ZMessageCore } from './ZMessageCore'

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {message} = '@zwd/z-ui';`
 */
const core = new ZMessageCore()

/**
 * 消息组件安装
 * @internal
 */
function install () {
  Vue.prototype.getMessageList = function () {
    const w = window as any
    let list = w.__ZUI_MESSAGE_LIST
    if (!list) {
      list = []
      w.__ZUI_MESSAGE_LIST = list
    }
    return list
  }

  Vue.mixin({
    beforeCreate () {
      const $options = this.$options
      if ($options.message) {
        this.$message = core
      } else {
        $options.parent && (this.$message = $options.parent.$message)
      }
    },
  })
}

Vue.use(install)

export { core as message, install }
