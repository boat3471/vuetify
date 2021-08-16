import mixins from '../../util/mixins'
import VDialog from './VDialog'

export const ZDialog = mixins(VDialog).extend({
  name: 'z-dialog',
  props: {
    top: {
      type: String,
      default: '',
    },
  },
  methods: {
    genInnerContent () {
      const comp = VDialog.options.methods.genInnerContent.call(this)
      let top = this.$props.top
      if (top) {
        top = (top + '').replace(/[^0-9]/g, '')
        if (comp && comp.data && comp.data.style) {
          // @ts-ignore
          comp.data.style.top = `${top}px`
          // @ts-ignore
          comp.data.style.position = 'fixed'
        }
      }
      return comp
    },
  },
})

export default ZDialog
