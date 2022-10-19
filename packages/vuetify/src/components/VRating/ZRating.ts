import VRating from './VRating'
import mixins from '../../util/mixins'

const ZRating = mixins(VRating).extend({
  name: 'z-rating',
})

export { ZRating }
export default ZRating
