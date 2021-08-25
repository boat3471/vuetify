import Vue, { VNode } from 'vue'
import { logo } from './assets/logo'

export const ZDefaultLogo = Vue.extend({
  name: 'z-default-logo',
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
    return h('div', { domProps: { innerHTML: logo }, style: { lineHeight: 0 } })
  },
})

export default ZDefaultLogo
