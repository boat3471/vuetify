import { Zui } from './framework'
import { ZMessage } from './zui/ZMessage'
import { ZModal } from './zui/ZModal'
import { createApp } from './zui/createApp'

// // @ts-ignore
// window.ZMessage = ZMessage
// // @ts-ignore
// window.ZModal = ZModal
// // @ts-ignore
// window.createApp = createApp

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Zui)
}

export default { Zui, ZMessage, ZModal, createApp }
