import Vue from 'vue'
import { Zui } from '@zwd/z-ui'

Vue.use(Zui)

const vuetify = new Zui({})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  vuetify,
  render: h => h('v-btn', {}, ['Vuetify Button']),
})
