import mixins from '../../util/mixins'
import VBtn from './VBtn'
import generateZSizeable from '../../zui/util/generateZSizeable'
import '../../zui/styles/ZBtn/index.scss'

const Sizeable = generateZSizeable([
  'z-btn-size--x-small',
  'z-btn-size--small',
  'z-btn-size--default',
  'z-btn-size--large',
  'z-btn-size--x-large',

  'v-size--x-small',
  'v-size--small',
  'v-size--default',
  'v-size--large',
  'v-size--x-large',
])

export const ZBtn = mixins(VBtn, Sizeable).extend({
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
