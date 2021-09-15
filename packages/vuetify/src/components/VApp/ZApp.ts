import VApp from './VApp'
import mixins from '../../util/mixins'
import { VNode } from 'vue'

const ZApp = mixins(VApp).extend({
  name: 'z-app',
  props: {
    noWrap: {
      type: Boolean,
      default: false,
    },
  },
  render (h) {
    let wrapper: VNode[] = []
    if (this.noWrap) {
      wrapper = this.$slots.default || []
    } else {
      wrapper = [h('div', { staticClass: 'v-application--wrap' }, this.$slots.default)]
    }
    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl,
        ...this.themeClasses,
      },
      attrs: { 'data-app': true },
      domProps: { id: this.id },
    }, [...wrapper])
  },
})

export { ZApp }
export default ZApp
