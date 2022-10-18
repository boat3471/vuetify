import VRating from './VRating'
import mixins from '../../util/mixins'

const ZRating = mixins(VRating).extend({
  name: 'z-rating',
  props: {
    dense: {
      type: Boolean,
      default () {
        return this.$themeStore.denseMode === true
      },
    },
  },
})

export { ZRating }
export default ZRating
