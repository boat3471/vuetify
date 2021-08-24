import Vue from 'vue'
import { Zui } from '../'
import * as locales from '../src/locale'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faTimesCircle)

Vue.use(Zui)

export default new Zui({
  lang: {
    locales,
  },
  icons: {
    iconfont: 'mdi',
    // iconfont: 'faSvg',
  },
})
