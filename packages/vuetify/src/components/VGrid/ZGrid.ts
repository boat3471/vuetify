import mixins from '../../util/mixins'
import {
  VContainer,
  VCol,
  VRow,
  VSpacer,
  VLayout,
  VFlex,
} from './index'

export const ZContainer = mixins(VContainer).extend({
  name: 'z-container',
})

export const ZCol = mixins(VCol).extend({
  name: 'z-col',
})

export const ZRow = mixins(VRow).extend({
  name: 'z-row',
})

export const ZSpacer = mixins(VSpacer).extend({
  name: 'z-spacer',
})

export const ZLayout = mixins(VLayout).extend({
  name: 'z-layout',
})

export const ZFlex = mixins(VFlex).extend({
  name: 'z-flex',
})

export default {
  $_vuetify_subcomponents: {
    ZContainer,
    ZCol,
    ZRow,
    ZSpacer,
    ZLayout,
    ZFlex,
  },
}
