import mixins from '../../util/mixins'

import {
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
} from './index'

export const ZExpansionPanels = mixins(VExpansionPanels).extend({
  name: 'z-expansion-panels',
})

export const ZExpansionPanel = mixins(VExpansionPanel).extend({
  name: 'z-expansion-panel',
})

export const ZExpansionPanelHeader = mixins(VExpansionPanelHeader).extend({
  name: 'z-expansion-panel-header',
})

export const ZExpansionPanelContent = mixins(VExpansionPanelContent).extend({
  name: 'z-expansion-panel-content',
})

export default {
  $_vuetify_subcomponents: {
    ZExpansionPanels,
    ZExpansionPanel,
    ZExpansionPanelHeader,
    ZExpansionPanelContent,
  },
}
