import Vue from 'vue'
import { Zui } from '@zwd/z-ui'

Vue.use(Zui)

const vuetify = new Zui({})

new Vue({
  el: '#app',
  vuetify,
  render: h => h('z-btn', {
    props: {
      xs: true,
    },
  }, ['Zui Button']),
})
