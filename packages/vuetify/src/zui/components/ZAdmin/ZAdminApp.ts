import Vue, { VNode } from 'vue'
import { ZApp } from '../../../components'
import './styles/ZAdmin.scss'

export const ZAdminApp = Vue.extend({
  name: 'z-admin-application',
  render (h): VNode {
    return h(ZApp,
      {
        staticClass: 'z-admin-application',
        props: { noWrap: true },
      },
      [h('RouterView', { staticClass: 'v-application--wrap' })]
    )
  },
})

export default ZAdminApp
