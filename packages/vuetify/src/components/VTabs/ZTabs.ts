import mixins from '../../util/mixins'
import {
  VTabs,
  VTab,
  VTabsItems,
  VTabItem,
  VTabsSlider,
} from './index'
import generateZSizeable from '../../zui/util/generateZSizeable'

import './ZTabs.scss'

const Sizeable = generateZSizeable([
  'v-tabs-size--x-small',
  'v-tabs-size--small',
  'v-tabs-size--default',
  'v-tabs-size--large',
  'v-tabs-size--x-large',
])

export const ZTabs = mixins(VTabs, Sizeable).extend({
  name: 'z-tabs',
  computed: {
    classes () {
      const sizeableClasses = (this as any).sizeableClasses
      return {
        ...VTabs.options.computed.classes.call(this),
        ...sizeableClasses,
      }
    },
  },
})

export const ZTab = mixins(VTab).extend({
  name: 'z-tab',
})

export const ZTabsItems = mixins(VTabsItems).extend({
  name: 'z-tabs-items',
})

export const ZTabItem = mixins(VTabItem).extend({
  name: 'z-tab-item',
})

export const ZTabsSlider = mixins(VTabsSlider).extend({
  name: 'z-tabs-slider',
})

export default {
  $_vuetify_subcomponents: {
    ZTabs,
    ZTab,
    ZTabsItems,
    ZTabItem,
    ZTabsSlider,
  },
}
