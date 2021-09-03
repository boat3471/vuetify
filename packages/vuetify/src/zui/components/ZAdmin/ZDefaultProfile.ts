import Vue, { VNode, VNodeData } from 'vue'
import { getSlot } from '../../../util/helpers'
import {
  ZMenu,
  ZBtn,
  ZCard,
  ZList,
  ZListItem,
  ZListItemIcon,
  ZListItemContent,
  ZListItemTitle,
  ZIcon,
  ZAvatar,
} from '../../../components'

export const ZDefaultProfile = Vue.extend({
  name: 'z-default-profile',
  props: {},
  data () {
    return {
      showProfileMenu: false,
    }
  },
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    logout () {
      this.showProfileMenu = false
      if (this.$auth && this.$auth.logout) {
        this.$auth.logout()
      } else {
        window.console.warn('未配置登出')
      }
    },
    genList () {
      const slotMenus = getSlot(this, 'profile-menus')
      const logoutIcon = this.$createElement(ZListItemIcon, {}, [
        this.$createElement(ZIcon, {}, ['mdi-logout']),
      ])
      const logoutContent = this.$createElement(ZListItemContent, {}, [
        this.$createElement(ZListItemTitle, {}, ['Logout']),
      ])
      const logoutListItem = this.$createElement(ZListItem, {
        on: { click: this.logout },
      }, [
        logoutIcon, logoutContent,
      ])
      return this.$createElement(ZList, {
        props: { nav: true, dense: true },
      }, [slotMenus, logoutListItem])
    },
    genActivator (props: VNodeData) {
      const photo = getSlot(this, 'profile-photo') ||
        this.$createElement(ZIcon, { props: { size: 22 } }, ['mdi-account-circle'])
      const avatar = this.$createElement(ZAvatar, {}, [photo])
      return this.$createElement(ZBtn, {
        staticClass: 'ml-1 mr-0',
        props: {
          icon: true,
          outlined: true,
        },
        on: props.on,
      }, [avatar])
    },
    genBody () {
      return this.$createElement(ZCard, {
        props: {
          width: 256,
        },
      }, [
        this.$slots.default,
        this.genList(),
      ])
    },
  },
  render (h): VNode {
    return h(ZMenu, {
      props: {
        left: true,
        nudgeBottom: '36',
        closeOnContentClick: false,
      },
      scopedSlots: {
        activator: this.genActivator,
      },
    }, [this.genBody()])
  },
})

export default ZDefaultProfile
