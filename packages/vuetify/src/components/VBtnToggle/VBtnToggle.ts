// Styles
import './VBtnToggle.sass'

// Mixins
import ButtonGroup from '../../mixins/button-group'
import Colorable from '../../mixins/colorable'
import DenseMode from '../../mixins/denseMode'

// Utilities
import mixins from '../../util/mixins'

/* @vue/component */
export default mixins(
  ButtonGroup,
  Colorable,
  DenseMode
).extend({
  name: 'v-btn-toggle',

  props: {
    backgroundColor: String,
    borderless: Boolean,
    group: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    tile: Boolean,
  },

  computed: {
    classes (): object {
      return {
        ...ButtonGroup.options.computed.classes.call(this),
        'v-btn-toggle': true,
        'v-btn-toggle--borderless': this.borderless,
        'v-btn-toggle--dense': this.computedDense,
        'v-btn-toggle--group': this.group,
        'v-btn-toggle--rounded': this.rounded,
        'v-btn-toggle--shaped': this.shaped,
        'v-btn-toggle--tile': this.tile,
        ...this.themeClasses,
      }
    },
  },

  methods: {
    genData () {
      const data = this.setTextColor(this.color, {
        ...ButtonGroup.options.methods.genData.call(this),
      })

      if (this.group) return data

      return this.setBackgroundColor(this.backgroundColor, data)
    },
  },
})
