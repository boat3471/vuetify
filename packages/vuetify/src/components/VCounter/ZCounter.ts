import VCounter from './VCounter'
import mixins from '../../util/mixins'

const ZCounter = mixins(VCounter).extend({
  name: 'z-counter',
})

export { ZCounter }
export default ZCounter
