import { VNode } from 'vue'
import VMain from './VMain'
import mixins from '../../util/mixins'

const ZMain = mixins(VMain).extend({
  name: 'z-main',
  props: {
    noWrap: {
      type: Boolean,
      default: false,
    },
  },
  render (h): VNode {
    const data = {
      staticClass: 'v-main',
      style: this.styles,
      ref: 'main',
    }

    let wrapper: VNode[] = []
    if (this.noWrap) {
      wrapper = this.$slots.default || []
    } else {
      wrapper = [h('div', { staticClass: 'v-main__wrap' }, this.$slots.default)]
    }

    return h(this.tag, data, [...wrapper])
  },
})

export { ZMain }
export default ZMain
