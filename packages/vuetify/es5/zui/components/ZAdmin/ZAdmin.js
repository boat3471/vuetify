"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAdmin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _helpers = require("../../../util/helpers");

var _options = require("../../options");

var _ZDefaultLogo = require("./ZDefaultLogo");

var _ZDefaultProfile = require("./ZDefaultProfile");

var _ZDefaultMenus = require("./ZDefaultMenus");

var _ZDefaultThemeOptionPanel = require("./ZDefaultThemeOptionPanel");

var _ZDefaultNavDrawer = require("./menu/ZDefaultNavDrawer");

require("../../../../src/zui/components/ZAdmin/styles/ZViewRoot.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAdmin = _vue.default.extend({
  name: 'z-admin',
  props: {
    toolbarDark: {
      type: Boolean,
      default: true
    },
    toolbarColor: {
      type: String,
      default: 'primary'
    },
    toolbarElevation: {
      type: String,
      default: '2'
    },
    projectName: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      projectDisplayName: this.$props.projectName || this.$ui.appName || 'Project Name',
      themePanelVisible: false,
      exitButtonVisible: false,
      exitButtonTimer: 0,
      menusSize: 0
    };
  },
  computed: {
    appBarVisible: function appBarVisible() {
      return this.$themeStore.cameraModel || this.$themeStore.appBarVisible || false;
    },
    footerVisible: function footerVisible() {
      return this.$themeStore.cameraModel || this.$themeStore.footerVisible || false;
    },
    showNavIcon: function showNavIcon() {
      return this.$themeStore.mainNavMode === _options.MainNavMode.Visible;
    }
  },
  watch: {
    projectName: function projectName(val) {
      this.projectDisplayName = val;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    document.onmousemove = function () {
      _this.exitButtonVisible = true;
      clearTimeout(_this.exitButtonTimer);
      _this.exitButtonTimer = setTimeout(function () {
        _this.exitButtonVisible = false;
      }, 5000);
    };
  },
  methods: {
    /**
     * 折叠主导航抽屉
     * @param event
     */
    onShowNavDrawer: function onShowNavDrawer(event) {
      event.stopPropagation();
      this.$theme.settingTheme({
        mainNavMiniMode: false,
        mainNavVisible: !this.$themeStore.mainNavVisible
      });
    },
    actionProfile: function actionProfile(item) {
      switch (item.key) {
        case 'logout':
          this.logout();
          break;

        case '':
          break;

        default:
          break;
      }
    },
    logout: function logout() {
      this.$emit('logout');
    },
    genAppBar: function genAppBar(h) {
      if (this.appBarVisible) {
        return '';
      }
      /* 导航按钮 */


      var appBarNavIcon = this.showNavIcon ? h(_components.ZAppBarNavIcon, {
        style: {
          marginRight: '16px'
        },
        on: {
          click: this.onShowNavDrawer
        }
      }) : '';
      /* logo插槽 */

      var logoSlot = (0, _helpers.getSlot)(this, 'logo') || h(_ZDefaultLogo.ZDefaultLogo, {
        staticClass: 'mr-3'
      });
      /* 项目标题插槽 */

      var titleSlot = (0, _helpers.getSlot)(this, 'title') || h('span', {
        staticClass: 'title',
        style: {
          userSelect: 'none'
        }
      }, [this.projectDisplayName]);
      var toolbarTitle = h(_components.ZToolbarTitle, {
        staticClass: 'mr-2'
      }, [titleSlot]);
      /* 工具栏左侧插槽 */

      var toolbarPrependSlot = (0, _helpers.getSlot)(this, 'toolbar-prepend');
      /* 工具栏右侧侧插槽 */

      var toolbarAppendSlot = (0, _helpers.getSlot)(this, 'toolbar-append');
      /* 个人中心主体插槽 */

      var profileSlot = (0, _helpers.getSlot)(this, 'profile');
      /* 个人中心激活按钮插槽 */

      var photoSlot = (0, _helpers.getSlot)(this, 'profile-photo');
      /* 个人中心菜单插槽 */

      var profileMenusSlot = (0, _helpers.getSlot)(this, 'profile-menus');
      /* 个人中心区域插槽，将使上面三种插槽的作用失效 */

      var profileAreaSlot = (0, _helpers.getSlot)(this, 'profile-area') || h(_ZDefaultProfile.ZDefaultProfile, {
        on: {
          action: this.actionProfile,
          logout: this.logout
        },
        scopedSlots: {
          'profile-menus': function profileMenus(props) {
            return photoSlot;
          },
          'profile-photo': function profilePhoto(props) {
            return profileMenusSlot;
          }
        }
      }, [profileSlot]);
      return h(_components.ZAppBar, {
        props: {
          app: true,
          elevation: this.toolbarElevation,
          color: this.toolbarColor,
          clippedLeft: this.$themeStore.mainNavPosition,
          dense: this.$themeStore.denseMode,
          dark: this.toolbarDark
        }
      }, [appBarNavIcon, logoSlot, toolbarTitle, toolbarPrependSlot, h(_components.ZSpacer), toolbarAppendSlot, profileAreaSlot]);
    },
    genAppMenus: function genAppMenus(h) {
      var _this2 = this;

      if (this.$themeStore.cameraModel) {
        return [];
      }
      /* 主菜单区插槽，此插槽存在时将不会使用默认菜单 */


      var menuAreaSlot = (0, _helpers.getSlot)(this, 'menu-area');

      if (menuAreaSlot) {
        return menuAreaSlot || [];
      }
      /* 主菜单顶部附加功能 */


      var menuPrependSlot = (0, _helpers.getSlot)(this, 'menu-prepend');
      /* 主菜单 */

      var menusSlot = (0, _helpers.getSlot)(this, 'menus') || [h(_ZDefaultMenus.ZDefaultMenus)];
      /* 主菜单底部附加功能 */

      var menuAppendSlot = (0, _helpers.getSlot)(this, 'menu-append');
      /* 主菜单插槽不存在时，渲染默认主菜单导航 */

      return [h(_ZDefaultNavDrawer.ZDefaultNavDrawer, {
        scopedSlots: {
          prepend: function prepend(props) {
            return menuPrependSlot;
          },
          append: function append(props) {
            return menuAppendSlot;
          }
        },
        on: {
          'click:theme': function clickTheme() {
            _this2.themePanelVisible = !_this2.themePanelVisible;
          }
        }
      }, [menusSlot])];
    },
    genAppMain: function genAppMain(h) {
      var RouterView = _vue.default.component('RouterView');

      var mainSlot = (0, _helpers.getSlot)(this, 'main') || h('transition', {
        props: {
          name: 'fade',
          mode: 'out-in'
        }
      }, [h(RouterView)]);
      var mainAreaSlot = (0, _helpers.getSlot)(this, 'main-area');

      if (mainAreaSlot) {
        return mainAreaSlot;
      }

      return [h(_components.ZMain, {
        staticClass: 'z-admin-main',
        props: {
          noWrap: false,
          noOverflow: true
        }
      }, [mainSlot])];
    },
    genAppFooter: function genAppFooter(h) {
      if (this.footerVisible) {
        return [];
      }

      var footerSlot = (0, _helpers.getSlot)(this, 'footer') || [h('span', {
        staticClass: 'text-truncate subtitle-2',
        style: {
          transform: 'scale(0.85)',
          transformOrigin: 'left'
        }
      }, ["Copyright \xA9 2019-2020 ".concat(this.projectDisplayName, " | Powered By ZPMC")])];
      var defaultFooter = h(_components.ZFooter, {
        staticClass: 'z-admin-footer',
        props: {
          app: true,
          color: this.toolbarColor,
          inset: !this.$themeStore.mainNavPosition,
          dark: this.toolbarDark
        }
      }, [this.showNavIcon ? h(_components.ZIcon, {
        staticClass: 'mr-3',
        props: {
          size: 14
        },
        on: {
          click: this.onShowNavDrawer
        }
      }, ['mdi-menu']) : '', footerSlot]);
      return (0, _helpers.getSlot)(this, 'footer-area') || [defaultFooter];
    },
    genAppDefaultThemeOptionPanel: function genAppDefaultThemeOptionPanel(h) {
      var _this3 = this;

      return h(_ZDefaultThemeOptionPanel.ZDefaultThemeOptionPanel, {
        props: {
          value: this.themePanelVisible
        },
        on: {
          input: function input(value) {
            _this3.themePanelVisible = value;
          }
        }
      });
    },
    genAppFloatMenus: function genAppFloatMenus(h) {
      return h('div');
    },
    genExitButton: function genExitButton(h) {
      var _this4 = this;

      if (!this.$themeStore.cameraModel) {
        return '';
      }

      var btn = h(_components.ZBtn, {
        props: {
          fab: true,
          fixed: true,
          left: true,
          bottom: true
        },
        style: {
          display: this.exitButtonVisible ? 'inherit' : 'none'
        },
        on: {
          click: function click() {
            _this4.$theme.settingTheme({
              cameraModel: false
            });
          }
        }
      }, [h(_components.ZIcon, ['mdi-location-exit'])]);
      return h(_components.ZFabTransition, [btn]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: "z-admin-main-wrap",
      style: {}
    }, [this.genAppBar(h), this.genAppMenus(h), this.genAppMain(h), this.genAppFooter(h), this.genAppDefaultThemeOptionPanel(h), this.genAppFloatMenus(h), this.genExitButton(h)]);
  }
});

exports.ZAdmin = ZAdmin;
var _default = ZAdmin;
exports.default = _default;
//# sourceMappingURL=ZAdmin.js.map