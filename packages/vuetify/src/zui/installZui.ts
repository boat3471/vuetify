import Vue from 'vue'
import * as directives from './directives'
import { ZuiCoreClass } from './ZuiCore'
import { ZModalClass } from './ZModal'
import { ZMessageClass } from './ZMessage'
import { ZMenuClass } from './ZMenu'
import { ZThemeClass } from './ZTheme'

export function installZui () {
  if (!(installZui as any).initialized) {
    (installZui as any).initialized = true
  }

  // 安装Zui指令
  Object.keys(directives).forEach(name => {
    Vue.directive(name, (directives as any)[name])
  })

  Vue.mixin({
    beforeCreate () {
      const $options = this.$options

      // 安装 ZuiCore
      if (!this.$ui) {
        this.$ui = ZuiCoreClass.genInstance()
      } else {
        $options.parent && (this.$ui = $options.parent.$ui)
      }

      // 安装 ZModal
      if (!this.$modal) {
        this.$modal = ZModalClass.genInstance()
      } else {
        $options.parent && (this.$modal = $options.parent.$modal)
      }

      // 安装 ZMessage
      if (!this.$message) {
        this.$message = ZMessageClass.genInstance()
      } else {
        $options.parent && (this.$message = $options.parent.$message)
      }

      // 安装 ZMenu
      if (!this.$menu) {
        this.$menu = ZMenuClass.genInstance()
      } else {
        $options.parent && (this.$menu = $options.parent.$menu)
      }

      // 安装 ZTheme
      if (!this.$theme) {
        this.$theme = ZThemeClass.genInstance()
      } else {
        $options.parent && (this.$theme = $options.parent.$theme)
      }
    },
  })
}
