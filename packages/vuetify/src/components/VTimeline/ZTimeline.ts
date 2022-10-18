import mixins from '../../util/mixins'

import {
  VTimeline,
  VTimelineItem,
} from './index'

export const ZTimeline = mixins(VTimeline).extend({
  name: 'z-timeline',
  props: {
    dense: {
      type: Boolean,
      default () {
        return this.$themeStore.denseMode === true
      },
    },
  },
})

export const ZTimelineItem = mixins(VTimelineItem).extend({
  name: 'z-timeline-item',
})

export default {
  $_vuetify_subcomponents: {
    ZTimeline,
    ZTimelineItem,
  },
}
