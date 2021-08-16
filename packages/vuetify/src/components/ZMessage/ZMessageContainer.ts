import Vue from 'vue'

export let zMessageContainer: Vue

export const ZMessageContainer = Vue.extend({
  name: 'z-message-container',
  mounted () {
    zMessageContainer = this
  },
  render (createElement): any {
    return createElement('div', {
      class: {
        'z-message-container': true,
      },
      attrs: {
      },
    })
  },
})

export default ZMessageContainer
