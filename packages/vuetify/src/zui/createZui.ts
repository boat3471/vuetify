import Vue from 'vue'
import Zui from '../framework'
import { ZuiGlobalPreset, ZuiUseOptions } from '../../types'

/**
 * 创建一个 Zui 实例，包含 $vuetify、$ui、$message、$modal
 */
export function createZui (options?: ZuiGlobalPreset, useOptions?: ZuiUseOptions) {
  // 安装 vuetify -> zui
  Vue.use(Zui, useOptions)

  return new Zui({
    ...options,
  })
}
