import mixins from '../../util/mixins'
import {
  VRadioGroup,
  VRadio,
} from './index'

export const ZRadioGroup = mixins(VRadioGroup).extend({
  name: 'z-radio-group',
})

export const ZRadio = mixins(VRadio).extend({
  name: 'z-radio',
})

export default {
  $_vuetify_subcomponents: {
    ZRadioGroup,
    ZRadio,
  },
}
