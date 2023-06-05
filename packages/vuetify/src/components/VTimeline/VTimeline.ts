// Styles
import './VTimeline.sass'

// Types
import { VNode } from 'vue'
import mixins from '../../util/mixins'

// Mixins
import Themeable from '../../mixins/themeable'
import DenseMode from '../../mixins/denseMode'

export default mixins(
  Themeable,
  DenseMode,
/* @vue/component */
).extend({
  name: 'v-timeline',

  provide (): object {
    return { timeline: this }
  },

  props: {
    alignTop: Boolean,
    reverse: Boolean,
  },

  computed: {
    classes (): {} {
      return {
        'v-timeline--align-top': this.alignTop,
        'v-timeline--dense': this.computedDense,
        'v-timeline--reverse': this.reverse,
        ...this.themeClasses,
      }
    },
  },

  render (h): VNode {
    return h('div', {
      staticClass: 'v-timeline',
      class: this.classes,
    }, this.$slots.default)
  },
})
