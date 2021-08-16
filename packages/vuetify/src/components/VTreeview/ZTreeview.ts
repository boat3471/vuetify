import mixins from '../../util/mixins'

import {
  VTreeview,
  VTreeviewNode,
} from './index'

export const ZTreeview = mixins(VTreeview).extend({
  name: 'z-treeview',
})

export const ZTreeviewNode = mixins(VTreeviewNode).extend({
  name: 'z-treeview-node',
})

export default {
  $_vuetify_subcomponents: {
    ZTreeview,
    ZTreeviewNode,
  },
}
