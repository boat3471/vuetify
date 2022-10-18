import VAppBar from './VAppBar'
import VAppBarNavIcon from './VAppBarNavIcon'
import VAppBarTitle from './VAppBarTitle'
import mixins from '../../util/mixins'

const ZAppBar = mixins(VAppBar).extend({
  name: 'z-app-bar',
  props: {
    dense: {
      type: Boolean,
      default () {
        return this.$themeStore.denseMode === true
      },
    },
  },
})

const ZAppBarNavIcon = mixins(VAppBarNavIcon).extend({
  name: 'z-app-bar-nav-icon',
})

const ZAppBarTitle = mixins(VAppBarTitle).extend({
  name: 'z-app-bar-title',
})

export { ZAppBar, ZAppBarNavIcon, ZAppBarTitle }
export default {
  $_vuetify_subcomponents: {
    ZAppBar,
    ZAppBarNavIcon,
    ZAppBarTitle,
  },
}
