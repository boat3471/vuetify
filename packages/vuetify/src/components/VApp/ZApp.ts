import VApp from './VApp'
import mixins from '../../util/mixins'

const ZApp = mixins(VApp).extend({
  name: 'z-app',
})

export { ZApp }
export default ZApp
