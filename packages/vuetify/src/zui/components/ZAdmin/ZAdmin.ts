import Vue, { CreateElement, VNode } from 'vue'
import {
  ZBtn,
  ZAppBar,
  ZAppBarNavIcon,
  ZMain,
  ZToolbarTitle,
  ZSpacer,
  ZFooter,
  ZIcon,
  ZFabTransition,
} from '../../../components'
import { getSlot } from '../../../util/helpers'
import { MainNavMode } from '../../options'

import { ZDefaultLogo } from './ZDefaultLogo'
import { ZDefaultProfile } from './ZDefaultProfile'
import { ZDefaultMenus } from './ZDefaultMenus'
import { ZDefaultThemeOptionPanel } from './ZDefaultThemeOptionPanel'
import { ZDefaultNavDrawer } from './menu/ZDefaultNavDrawer'
import { ZDefaultThemeIcon } from './menu/ZDefaultThemeIcon'

import './styles/ZViewRoot.scss'

export const ZAdmin = Vue.extend({
  name: 'z-admin',
  props: {
    toolbarDark: {
      type: Boolean,
      default: true,
    },
    toolbarColor: {
      type: String,
      default: 'primary',
    },
    toolbarElevation: {
      type: String,
      default: '2',
    },
    projectName: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      projectDisplayName: this.$props.projectName || this.$ui.appName || 'Project Name',
      themePanelVisible: false,
      exitButtonVisible: false,
      exitButtonTimer: 0,
      menusSize: 0,
    }
  },
  computed: {
    appBarVisible (): boolean {
      return this.$themeStore.cameraModel || this.$themeStore.appBarVisible || false
    },
    footerVisible (): boolean {
      return this.$themeStore.cameraModel || this.$themeStore.footerVisible || false
    },
    showNavIcon (): boolean {
      return this.$themeStore.mainNavMode === MainNavMode.Visible
    },
  },
  watch: {
    projectName (val) {
      this.projectDisplayName = val
    },
  },
  created () {
  },
  mounted () {
    document.onmousemove = () => {
      this.exitButtonVisible = true
      clearTimeout(this.exitButtonTimer)
      this.exitButtonTimer = setTimeout(() => {
        this.exitButtonVisible = false
      }, 5000) as any
    }
  },
  methods: {
    /**
     * 折叠主导航抽屉
     * @param event
     */
    onShowNavDrawer (event: PointerEvent) {
      event.stopPropagation()

      this.$theme.settingTheme({
        mainNavMiniMode: false,
        mainNavVisible: !this.$themeStore.mainNavVisible,
      })
    },
    onShowThemePanel () {
      this.themePanelVisible = !this.themePanelVisible
    },
    actionProfile (item: any) {
      switch (item.key) {
        case 'logout':
          this.logout()
          break
        case '':
          break
        default:
          break
      }
    },
    logout () {
      this.$emit('logout')
    },
    genAppBar (h: CreateElement): VNode | string {
      if (this.appBarVisible) {
        return ''
      }
      /* 导航按钮 */
      let navIcon = null

      if (this.$menu.isRender && this.showNavIcon) {
        navIcon = h(ZAppBarNavIcon, {
          style: { marginRight: '16px' },
          on: { click: this.onShowNavDrawer },
        })
      }

      /* logo插槽 */
      const logoSlot = getSlot(this, 'logo') || h(ZDefaultLogo, { staticClass: 'mr-3' })

      /* 项目标题插槽 */
      const titleSlot = getSlot(this, 'title') ||
        h('span', { staticClass: 'title', style: { userSelect: 'none' } }, [this.projectDisplayName])
      const toolbarTitle = h(ZToolbarTitle, { staticClass: 'mr-2' }, [titleSlot])

      /* 工具栏 */
      const toolbarSlot = getSlot(this, 'toolbar')
      /* 工具栏左侧插槽 */
      const toolbarPrependSlot = getSlot(this, 'toolbar-prepend')
      /* 工具栏右侧侧插槽 */
      const toolbarAppendSlot = getSlot(this, 'toolbar-append')

      const toolbarChildren = toolbarSlot ? [toolbarSlot] : [
        toolbarPrependSlot,
        h(ZSpacer),
        toolbarAppendSlot,
      ]

      /* 个人中心主体插槽 */
      const profileSlot = getSlot(this, 'profile')
      /* 个人中心激活按钮插槽 */
      const photoSlot = getSlot(this, 'profile-photo')
      /* 个人中心菜单插槽 */
      const profileMenusSlot = getSlot(this, 'profile-menus')

      /* 个人中心区域插槽，将使上面三种插槽的作用失效 */
      const profileAreaSlot = getSlot(this, 'profile-area') ||
        h(ZDefaultProfile, {
          on: {
            action: this.actionProfile,
            logout: this.logout,
          },
          scopedSlots: {
            'profile-menus': (props: any) => photoSlot,
            'profile-photo': (props: any) => profileMenusSlot,
          },
        }, [profileSlot])

      return h(ZAppBar, {
        props: {
          app: true,
          elevation: this.toolbarElevation,
          color: this.toolbarColor,
          clippedLeft: this.$themeStore.mainNavPosition,
          dense: this.$themeStore.denseMode,
          dark: this.toolbarDark,
        },
      }, [
        navIcon,
        logoSlot,
        toolbarTitle,
        ...toolbarChildren,
        profileAreaSlot,
      ])
    },
    genAppMenus (h: CreateElement): VNode[] {
      if (!this.$menu.isRender) {
        return []
      }
      if (this.$themeStore.cameraModel) {
        return []
      }
      /* 主菜单区插槽，此插槽存在时将不会使用默认菜单 */
      const menuAreaSlot = getSlot(this, 'menu-area')
      if (menuAreaSlot) {
        return menuAreaSlot || []
      }

      /* 主菜单顶部附加功能 */
      const menuPrependSlot = getSlot(this, 'menu-prepend')

      /* 主菜单 */
      const menusSlot = getSlot(this, 'menus') || [h(ZDefaultMenus)]

      /* 主菜单底部附加功能 */
      const menuAppendSlot = getSlot(this, 'menu-append')

      /* 主菜单插槽不存在时，渲染默认主菜单导航 */
      return [
        h(ZDefaultNavDrawer, {
          scopedSlots: {
            prepend: (props: any) => menuPrependSlot,
            append: (props: any) => menuAppendSlot,
          },
          on: {
            'click:theme': () => {
              this.onShowThemePanel()
            },
          },
        }, [
          menusSlot,
        ]),
      ]
    },
    genAppMain (h: CreateElement): VNode[] {
      const RouterView = Vue.component('RouterView')
      const mainSlot = getSlot(this, 'main') ||
        h('transition', {
          props: {
            name: 'fade',
            mode: 'out-in',
          },
        }, [
          h(RouterView),
        ])
      const mainAreaSlot = getSlot(this, 'main-area')
      if (mainAreaSlot) {
        return mainAreaSlot
      }
      return [
        h(ZMain, {
          staticClass: 'z-admin-main',
          props: {
            noWrap: false,
            noOverflow: true,
          },
        },
        [mainSlot]
        ),
      ]
    },
    genAppFooter (h: CreateElement): VNode[] {
      if (this.footerVisible) {
        return []
      }
      const footerSlot = getSlot(this, 'footer') || [
        h('span',
          {
            staticClass: 'text-truncate subtitle-2',
            style: {
              transform: 'scale(0.85)',
              transformOrigin: 'left',
            },
          },
          [
            `Copyright © 2019-2020 ${this.projectDisplayName} | Powered By ZPMC`,
          ]),
      ]

      let navIcon = null
      if (this.$menu.isRender && this.showNavIcon) {
        navIcon = h(ZIcon, {
          staticClass: 'mr-3',
          props: { size: 14 },
          on: { click: this.onShowNavDrawer },
        }, ['mdi-menu'])
      } else {
        navIcon = h(ZDefaultThemeIcon, {
          staticClass: 'mr-2',
          on: {
            'click:theme': () => {
              this.onShowThemePanel()
            },
          },
        })
      }

      const defaultFooter = h(ZFooter, {
        staticClass: 'z-admin-footer',
        props: {
          app: true,
          color: this.toolbarColor,
          inset: !this.$themeStore.mainNavPosition,
          dark: this.toolbarDark,
        },
      }, [
        navIcon,
        footerSlot,
      ])
      return getSlot(this, 'footer-area') || [defaultFooter]
    },
    genAppDefaultThemeOptionPanel (h: CreateElement): VNode | string {
      return h(ZDefaultThemeOptionPanel, {
        props: {
          value: this.themePanelVisible,
        },
        on: {
          input: (value: boolean) => {
            this.themePanelVisible = value
          },
        },
      })
    },
    genAppFloatMenus (h: CreateElement): VNode {
      return h('div')
    },

    genExitButton (h: CreateElement): VNode | string {
      if (!this.$themeStore.cameraModel) {
        return ''
      }
      const btn = h(ZBtn, {
        props: { fab: true, fixed: true, left: true, bottom: true },
        style: {
          display: this.exitButtonVisible ? 'inherit' : 'none',
        },
        on: {
          click: () => {
            this.$theme.settingTheme({
              cameraModel: false,
            })
          },
        },
      }, [h(ZIcon, ['mdi-location-exit'])])
      return h(ZFabTransition, [btn])
    },
  },

  render (h): VNode {
    return h('div', {
      staticClass: `z-admin-main-wrap`,
      style: {},
    }, [
      this.genAppBar(h),
      this.genAppMenus(h),
      this.genAppMain(h),
      this.genAppFooter(h),
      this.genAppDefaultThemeOptionPanel(h),
      this.genAppFloatMenus(h),
      this.genExitButton(h),
    ])
  },
})

export default ZAdmin
