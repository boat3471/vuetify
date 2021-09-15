import mixins from '../../util/mixins'

import { VNode } from 'vue'
import VTooltip from './VTooltip'

import './ZTooltip.scss'

export const ZTooltip = mixins(VTooltip).extend({
  name: 'z-tooltip',
  computed: {
    styles () {
      const styles = VTooltip.options.computed.styles.call(this)
      // @ts-ignore
      styles.opacity = (this as any).isActive ? 1 : 0
      return styles
    },
  },
  methods: {
    setBackgroundColor (color: string, data = {}) {
      const { defaultTooltipColor } = this.$ui
      color = color || defaultTooltipColor
      // @ts-ignore
      return VTooltip.options.methods.setBackgroundColor.call(this, color, data)
    },
    genContent () {
      const content = VTooltip.options.methods.genContent.call(this)
      // @ts-ignore
      const classes = content.data.class
      const children = this.$children
      let xs = false
      let s = false
      let m = false
      let l = false
      let xl = false
      children.forEach((i: any) => {
        xs = i.xs
        s = i.s
        m = i.m
        l = i.l
        xl = i.xl
      })
      Object.assign(classes, {
        'v-tooltip-size--x-small': xs,
        'v-tooltip-size--small': s,
        'v-tooltip-size--default': m,
        'v-tooltip-size--large': l,
        'v-tooltip-size--x-large': xl,
      })
      return content
    },
  },
  render (createElement): VNode {
    const that = this as any
    return createElement(that.tag, {
      staticClass: 'v-tooltip',
      class: that.classes,
    }, [that.showLazyContent(() => [that.genTransition()]), that.genActivator()])
  },
})

export default ZTooltip
