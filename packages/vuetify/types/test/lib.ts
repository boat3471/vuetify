import Vue from 'vue'

import Zui, {
  ZBtn,
  ZCard,
  ZCardText,
} from '@zwd/z-ui/lib'

import * as directives from '@zwd/z-ui/lib/directives'

Zui.install(Vue)

Zui.install(Vue, {})

Zui.install(Vue, {
  components: {
    ZBtn,
    ZCard,
    ZCardText,
  },
  directives,
})

/* eslint-disable-next-line no-new */
new Vue({
  vuetify: new Zui(),
})

ZBtn.extend()

Vue.extend({
  extends: ZBtn,
})
