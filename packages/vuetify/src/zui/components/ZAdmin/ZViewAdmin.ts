import Vue, { VNode } from 'vue'
import { ZApp } from '../../../components'
import './styles/ZAdmin.scss'

export const ZViewAdmin = Vue.extend({
  name: 'z-admin-application',
  props: {
  },
  data () {
    return {}
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  render (h): VNode {
    const RouterView = Vue.component('RouterView')
    return h(ZApp, { staticClass: 'z-admin-application' }, [
      h(RouterView),
    ])
  },
})

export default ZViewAdmin
