import Vue from 'vue'
import './ZMessage.scss'

export const ZMessageContainer = Vue.extend({
  name: 'z-message-container',
  render (createElement): any {
    return createElement('div', {
      staticClass: 'z-message-container',
    })
  },
})

export default ZMessageContainer
