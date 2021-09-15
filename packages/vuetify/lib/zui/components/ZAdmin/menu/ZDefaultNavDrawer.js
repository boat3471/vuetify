import Vue from 'vue';
import { ZIcon, ZList, ZListItem, ZListItemIcon, ZListItemTitle, ZNavigationDrawer } from '../../../../components';
import { MainNavMode } from '../../../options';
import { getSlot } from '../../../../util/helpers';
export const ZDefaultNavDrawer = Vue.extend({
  name: 'z-default-nav-drawer',
  props: {},

  data() {
    return {};
  },

  computed: {
    visible() {
      if (this.$themeStore.mainNavMode === MainNavMode.Flex) {
        return true;
      }

      if (this.$themeStore.mainNavMode === MainNavMode.Visible) {
        return this.$themeStore.mainNavVisible || false;
      }

      return true;
    },

    width() {
      return this.$themeStore.mainMenuWidth || 275;
    },

    clipped() {
      return this.$themeStore.mainNavPosition || true;
    },

    permanent() {
      return this.$themeStore.mainNavMode === MainNavMode.Flex;
    },

    themeIcon() {
      return this.$themeStore.darkStatus ? 'mdi-brightness-4' : 'mdi-brightness-7';
    },

    foldIcon() {
      return this.$themeStore.mainNavMiniMode ? 'mdi-chevron-right' : 'mdi-chevron-left';
    },

    expandOnHover() {
      return this.$themeStore.mainNavMode === MainNavMode.Flex;
    }

  },
  watch: {},

  created() {},

  mounted() {},

  methods: {
    onFoldClick(event) {
      event.stopPropagation();
      /* 1. 重置选项 */

      const options = {
        mainNavMiniMode: false,
        mainNavVisible: true
      };
      /* 2. 更新选项 */

      switch (this.$themeStore.mainNavMode) {
        case MainNavMode.Visible:
          {
            options.mainNavVisible = !this.$themeStore.mainNavVisible;
            break;
          }

        case MainNavMode.Flex:
          {
            const mainNavMiniMode = !this.$themeStore.mainNavMiniMode;

            if (mainNavMiniMode) {
              /* 如果为mini模式，则将所有菜单收起，并禁用菜单 */
              this.$menu.resetStatus();
            } else {
              /* 如果为非mini模式，则将菜单根据当前路由展开 */
              this.$menu.activeByRoute();
            }

            options.mainNavMiniMode = mainNavMiniMode;
            break;
          }

        default:
          break;
      }
      /* 3. 更新皮肤数据 */


      this.$theme.settingTheme(options);
    },

    onThemeClick() {
      this.$emit('click:theme');
    },

    /**
     * 主菜单底部默认功能：
     * 1、展开和收起菜单
     * 2、皮肤设置
     * @param h
     */
    genDefaultAppend(h) {
      const ThemePanelIcon = h(ZIcon, {
        props: {
          color: 'grey darken-1',
          size: 18
        }
      }, [this.themeIcon]);
      /* 皮肤入口 */

      const ThemePanel = h(ZListItem, {
        on: {
          click: this.onThemeClick
        }
      }, [h(ZListItemIcon, {
        staticClass: 'justify-center mr-3'
      }, [ThemePanelIcon]), h(ZListItemTitle, {
        staticClass: 'grey--text text--darken-1'
      }, ['Theme'])]);
      /* 导航展开收起入口 */

      const ActionNavDrawer = this.expandOnHover ? '' : h(ZListItem, {
        on: {
          click: this.onFoldClick
        }
      }, [h(ZListItemIcon, {
        staticClass: 'justify-center mr-3'
      }, [h(ZIcon, [this.foldIcon])]), h(ZListItemTitle, {
        staticClass: 'grey--text text--darken-1'
      }, ['Fold'])]);
      return h(ZList, {
        props: {
          dense: this.$themeStore.denseMode,
          subheader: true
        }
      }, [ThemePanel, ActionNavDrawer]);
    }

  },

  render(h) {
    const prependSlot = getSlot(this, 'prepend');
    const appendSlot = getSlot(this, 'append');
    return h(ZNavigationDrawer, {
      staticClass: 'z-default-navigation-drawer',
      props: {
        app: true,
        value: this.visible,
        width: this.width,
        clipped: this.clipped,
        permanent: this.permanent,
        miniVariant: this.expandOnHover,
        expandOnHover: this.expandOnHover
      },
      scopedSlots: {
        prepend: props => prependSlot,
        append: props => [appendSlot, this.genDefaultAppend(h)]
      },
      on: {
        'change:mini-variant': val => {
          if (val) {
            this.$menu.resetStatus();
          } else {
            this.$menu.activeByRoute();
          }
        }
      }
    }, [this.$slots.default]);
  }

});
export default ZDefaultNavDrawer;
//# sourceMappingURL=ZDefaultNavDrawer.js.map