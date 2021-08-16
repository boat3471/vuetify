import mixins from '../../util/mixins'
import VBtn from './VBtn'

export const ZBtn = mixins(VBtn).extend({
  name: 'z-btn',
  computed: {
    classes (): any {
      const map = VBtn.options.computed.classes.call(this)
      Object.assign(map, {
        'z-btn': true,
      })
      return map
    },
  },
})

export default ZBtn
