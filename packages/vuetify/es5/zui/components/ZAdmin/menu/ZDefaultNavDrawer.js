"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultNavDrawer = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../../components");

var _options = require("../../../options");

var _helpers = require("../../../../util/helpers");

var _ZDefaultThemeIcon = require("./ZDefaultThemeIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDefaultNavDrawer = _vue.default.extend({
  name: 'z-default-nav-drawer',
  props: {},
  data: function data() {
    return {};
  },
  computed: {
    visible: function visible() {
      if (this.$themeStore.mainNavMode === _options.MainNavMode.Flex) {
        return true;
      }

      if (this.$themeStore.mainNavMode === _options.MainNavMode.Visible) {
        return this.$themeStore.mainNavVisible || false;
      }

      return true;
    },
    width: function width() {
      return this.$themeStore.mainMenuWidth || 275;
    },
    clipped: function clipped() {
      return this.$themeStore.mainNavPosition || true;
    },
    permanent: function permanent() {
      return this.$themeStore.mainNavMode === _options.MainNavMode.Flex;
    },
    foldIcon: function foldIcon() {
      return this.$themeStore.mainNavMiniMode ? 'mdi-chevron-right' : 'mdi-chevron-left';
    },
    expandOnHover: function expandOnHover() {
      return this.$themeStore.mainNavMode === _options.MainNavMode.Flex;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    onFoldClick: function onFoldClick(event) {
      event.stopPropagation();
      /* 1. 重置选项 */

      var options = {
        mainNavMiniMode: false,
        mainNavVisible: true
      };
      /* 2. 更新选项 */

      switch (this.$themeStore.mainNavMode) {
        case _options.MainNavMode.Visible:
          {
            options.mainNavVisible = !this.$themeStore.mainNavVisible;
            break;
          }

        case _options.MainNavMode.Flex:
          {
            var mainNavMiniMode = !this.$themeStore.mainNavMiniMode;

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
    onThemeClick: function onThemeClick() {
      this.$emit('click:theme');
    },

    /**
     * 主菜单底部默认功能：
     * 1、展开和收起菜单
     * 2、皮肤设置
     * @param h
     */
    genDefaultAppend: function genDefaultAppend(h) {
      var ThemePanelIcon = h(_ZDefaultThemeIcon.ZDefaultThemeIcon, {
        props: {
          color: 'grey darken-1'
        }
      });
      /* 皮肤入口 */

      var ThemePanel = h(_components.ZListItem, {
        on: {
          click: this.onThemeClick
        }
      }, [h(_components.ZListItemIcon, {
        staticClass: 'justify-center mr-3'
      }, [ThemePanelIcon]), h(_components.ZListItemTitle, {
        staticClass: 'grey--text text--darken-1'
      }, ['Theme'])]);
      /* 导航展开收起入口 */

      var ActionNavDrawer = this.expandOnHover ? '' : h(_components.ZListItem, {
        on: {
          click: this.onFoldClick
        }
      }, [h(_components.ZListItemIcon, {
        staticClass: 'justify-center mr-3'
      }, [h(_components.ZIcon, [this.foldIcon])]), h(_components.ZListItemTitle, {
        staticClass: 'grey--text text--darken-1'
      }, ['Fold'])]);
      return h(_components.ZList, {
        props: {
          dense: this.$themeStore.denseMode,
          subheader: true
        }
      }, [ThemePanel, ActionNavDrawer]);
    }
  },
  render: function render(h) {
    var _this = this;

    var prependSlot = (0, _helpers.getSlot)(this, 'prepend');
    var appendSlot = (0, _helpers.getSlot)(this, 'append');
    return h(_components.ZNavigationDrawer, {
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
        prepend: function prepend(props) {
          return prependSlot;
        },
        append: function append(props) {
          return [appendSlot, _this.genDefaultAppend(h)];
        }
      },
      on: {
        'change:mini-variant': function changeMiniVariant(val) {
          if (val) {
            _this.$menu.resetStatus();
          } else {
            _this.$menu.activeByRoute();
          }
        }
      }
    }, [this.$slots.default]);
  }
});

exports.ZDefaultNavDrawer = ZDefaultNavDrawer;
var _default = ZDefaultNavDrawer;
exports.default = _default;
//# sourceMappingURL=ZDefaultNavDrawer.js.map