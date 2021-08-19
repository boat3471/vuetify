import Vue from 'vue'

import Vuetify, {
  ZBtn,
  ZCard,
  ZCardText,
} from '@zwd/z-ui/lib'

import * as directives from '@zwd/z-ui/lib/directives'

Vuetify.install(Vue)

Vuetify.install(Vue, {})

Vuetify.install(Vue, {
  components: {
    ZBtn,
    ZCard,
    ZCardText,
  },
  directives,
})

/* eslint-disable-next-line no-new */
new Vue({
  vuetify: new Vuetify(),
})

ZBtn.extend()

Vue.extend({
  extends: ZBtn,
})
