import { VNode, VNodeData } from 'vue'
import mixins from '../../util/mixins'

import {
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VListItemActionText,
  VListItemAvatar,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
} from './index'
import ZIcon from '../VIcon/ZIcon'

export const ZList = mixins(VList).extend({
  name: 'z-list',
})

export const ZListGroup = mixins(VListGroup).extend({
  name: 'z-list-group',
  props: {
    expandIconSize: {
      type: Number,
      default: 14,
    },
  },
  methods: {
    genIcon (icon: string | false): VNode {
      const options: VNodeData = {}
      if (icon === '$expand') {
        options.props = {
          size: this.expandIconSize,
        }
      }
      return this.$createElement(ZIcon, options, icon)
    },
  },
})

export const ZListItem = mixins(VListItem).extend({
  name: 'z-list-item',
})

export const ZListItemAction = mixins(VListItemAction).extend({
  name: 'z-list-item-action',
})

export const ZListItemAvatar = mixins(VListItemAvatar).extend({
  name: 'z-list-item-avatar',
})

export const ZListItemGroup = mixins(VListItemGroup).extend({
  name: 'z-list-item-group',
})

export const ZListItemIcon = mixins(VListItemIcon).extend({
  name: 'z-list-item-icon',
})

export const ZListItemActionText = mixins(VListItemActionText).extend({
  name: 'z-list-item-action-text',
})

export const ZListItemContent = mixins(VListItemContent).extend({
  name: 'z-list-item-content',
})

export const ZListItemSubtitle = mixins(VListItemSubtitle).extend({
  name: 'z-list-item-subtitle',
})

export const ZListItemTitle = mixins(VListItemTitle).extend({
  name: 'z-list-item-title',
})

export default {
  $_vuetify_subcomponents: {
    ZList,
    ZListGroup,
    ZListItem,
    ZListItemAction,
    ZListItemActionText,
    ZListItemAvatar,
    ZListItemContent,
    ZListItemGroup,
    ZListItemIcon,
    ZListItemSubtitle,
    ZListItemTitle,
  },
}
