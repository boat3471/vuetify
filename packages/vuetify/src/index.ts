import { Zui } from './framework'
import { ZMessage } from './zui/ZMessage'
import { ZModal } from './zui/ZModal'
import { ZuiTool } from './zui/ZuiCore'
import { createApp } from './zui/createApp'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Zui)
}

export default { Zui, ZuiTool, ZMessage, ZModal, createApp }
