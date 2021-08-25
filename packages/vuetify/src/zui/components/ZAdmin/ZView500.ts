import Vue, { VNode } from 'vue'
import { SvgText, SvgFlag } from './assets/500'
import { ZBtn } from '../../../components'

export const ZView500 = Vue.extend({
  name: 'z-view-500',
  props: {},

  data () {
    return {}
  },

  watch: {},
  methods: {
    goHome () {
      this.$ui.openHome && this.$ui.openHome()
    },
    goBack () {
      this.$router && this.$router.back()
    },
    gen () {
      return this.$createElement('div', {
        staticClass: 'd-flex flex-column justify-start',
      }, [
        this.$createElement('div', { domProps: { innerHTML: SvgText } }),
        this.$createElement(ZBtn, {
          props: {
            text: true,
            m: true,
          },
          on: {
            click: this.goHome,
          },
        }, ['Go Home']),
        this.$createElement(ZBtn, {
          props: {
            text: true,
            m: true,
          },
          on: {
            click: this.goBack,
          },
        }, ['Go Back']),
      ])
    },
  },

  render (h): VNode {
    return h('div', {
      staticClass: 'z-view-500 d-flex justify-center align-center',
      style: {
        width: '100%',
        height: '100%',
      },
    }, [
      h('div', { domProps: { innerHTML: SvgFlag }, style: { marginRight: '40px' } }),
      this.gen(),
    ])
  },
})

export default ZView500
