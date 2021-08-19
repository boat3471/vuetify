import Vue from 'vue'
import Vuetify from '@zwd/z-ui'

Vue.use(Vuetify)

const vuetify = new Vuetify({})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  vuetify,
  render: h => h('v-btn', {}, ['Vuetify Button']),
})
