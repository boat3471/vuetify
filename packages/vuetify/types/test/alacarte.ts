import Vue from 'vue'

import { install } from '@zwd/z-ui/es5/install'
import VBtn from '@zwd/z-ui/es5/components/VBtn'
import * as VCard from '@zwd/z-ui/es5/components/VCard'
import { Ripple } from '@zwd/z-ui/es5/directives'
import * as directives from '@zwd/z-ui/es5/directives'

install(Vue, {
  components: {
    VBtn,
    ...VCard,
  },
  directives: {
    ...directives,
  },
})

Vue.extend({
  components: {
    VBtn,
    ...VCard,
  },
  directives: {
    Ripple,
  },
})

VBtn.extend()

Vue.extend({
  extends: VBtn,
})
