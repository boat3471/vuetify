"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultThemeOptionPanel = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _options = require("../../options");

require("../../../../src/zui/components/ZAdmin/styles/ZDefaultThemeOptionPanel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 默认皮肤设置面板
 */
var ZDefaultThemeOptionPanel = _vue.default.extend({
  name: 'z-default-theme-option-panel',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: this.value
    };
  },
  computed: {},
  watch: {
    value: function value(val) {
      this.visible = val;
    },
    visible: function visible(val) {
      this.$emit('input', val);
    }
  },
  created: function created() {},
  methods: {
    changePrimaryColor: function changePrimaryColor(val) {
      this.$theme.settingPrimaryColor(val);
    },
    changeDark: function changeDark(val) {
      this.$theme.settingDarkStatus(val);
    },
    changeDenseMode: function changeDenseMode(val) {
      this.$theme.settingTheme({
        denseMode: val
      });
    },
    changeMainNavMode: function changeMainNavMode(val) {
      this.$theme.settingTheme({
        mainNavMode: val ? _options.MainNavMode.Flex : _options.MainNavMode.Visible,
        mainNavMiniMode: !val ? false : this.$themeStore.mainNavMiniMode
      });
    },
    changeMainNavPosition: function changeMainNavPosition(val) {
      this.$theme.settingTheme({
        mainNavPosition: val
      });
    },
    changeMainMenuExpandMode: function changeMainMenuExpandMode(val) {
      if (this.$themeStore.mainNavMode === _options.MainNavMode.Visible && !val) {
        this.$menu.resetStatus();
        this.$menu.activeByRoute();
      }

      this.$theme.settingTheme({
        mainMenuExpandMode: val
      });
    },
    changeMainMenuWidth: function changeMainMenuWidth(val) {
      this.$theme.settingTheme({
        mainMenuWidth: val
      });
    },
    genCardTitle: function genCardTitle(h) {
      var _this = this;

      var listItem = h(_components.ZListItem, [h(_components.ZListItemAvatar, {
        props: {
          color: this.$themeStore.primaryColor
        }
      }), h(_components.ZListItemContent, [h(_components.ZListItemTitle, {
        staticClass: 'headline'
      }, ['主题设置'])]), h(_components.ZListItemAction, [h(_components.ZBtn, {
        props: {
          icon: true
        },
        on: {
          click: function click() {
            _this.visible = !_this.visible;
          }
        }
      }, [h(_components.ZIcon, ['mdi-close'])])])]);
      var row = h(_components.ZRow, {
        props: {
          noGutter: true
        }
      }, [h(_components.ZCol, {
        props: {
          cols: 'auto'
        }
      }), h(_components.ZSpacer), h(_components.ZCol, {
        props: {
          cols: 'auto'
        }
      })]);
      return h(_components.ZCardTitle, {}, [listItem, row]);
    },
    genCardBody: function genCardBody(h) {
      var _this2 = this;

      var col1 = h(_components.ZCol, {
        props: {
          col: 3
        }
      }, [h(_components.ZColorPicker, {
        staticClass: 'ma-2',
        props: {
          value: this.$themeStore.primaryColor,
          canvasHeight: '100',
          hideInputs: true
        },
        on: {
          'update:color': function updateColor(val) {
            _this2.changePrimaryColor(val.hex);
          }
        }
      })]);
      var col2 = h(_components.ZCol, [h(_components.ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.darkStatus,
          label: '切换暗色主题'
        },
        on: {
          change: this.changeDark
        }
      }), h(_components.ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.denseMode,
          label: '切换紧凑模式'
        },
        on: {
          change: this.changeDenseMode
        }
      }), h(_components.ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.cameraModel,
          label: '切换相机模式'
        },
        on: {
          change: function change(val) {
            _this2.$theme.settingTheme({
              cameraModel: val
            });
          }
        }
      })]);
      var col3 = h(_components.ZCol, [h(_components.ZSlider, {
        staticClass: 'mt-6',
        props: {
          value: this.$themeStore.mainMenuWidth,
          inverseLabel: true,
          label: '菜单宽度',
          min: '200',
          max: '350',
          thumbColor: 'red',
          thumbLabel: 'always'
        },
        on: {
          input: this.changeMainMenuWidth
        }
      }), h(_components.ZSwitch, {
        staticClass: 'mb-2 ml-2',
        props: {
          inputValue: this.$themeStore.mainNavMode === _options.MainNavMode.Flex,
          label: '切换主导航显示模式'
        },
        on: {
          change: this.changeMainNavMode
        }
      }), h('div', {
        style: {
          transform: 'scale(0.8)',
          marginTop: '-10px',
          marginLeft: '25px',
          textAlign: 'left',
          color: '#999'
        }
      }, ['开启时支持mini模式，关闭时支持隐藏显示']), h(_components.ZSwitch, {
        staticClass: 'mb-2 ml-2',
        props: {
          inputValue: this.$themeStore.mainNavPosition,
          label: '切换主菜单显示位置'
        },
        on: {
          change: this.changeMainNavPosition
        }
      }), h('div', {
        style: {
          transform: 'scale(0.8)',
          marginTop: '-10px',
          marginLeft: '25px',
          textAlign: 'left',
          color: '#999'
        }
      }, ['开启时主菜单显示位置在框架内']), h(_components.ZSwitch, {
        staticClass: 'mb-2 ml-2',
        props: {
          inputValue: this.$themeStore.mainMenuExpandMode,
          label: '切换主菜单展开模式'
        },
        on: {
          change: this.changeMainMenuExpandMode
        }
      }), h('div', {
        style: {
          transform: 'scale(0.8)',
          marginTop: '-10px',
          marginLeft: '25px',
          textAlign: 'left',
          color: '#999'
        }
      }, ['开启时可同时展开多个菜单'])]);
      return h(_components.ZCardText, [h(_components.ZRow, {
        props: {
          noGutter: true,
          justify: 'start'
        }
      }, [col1, col2, col3, h(_components.ZCol)])]);
    }
  },
  render: function render(h) {
    var _this3 = this;

    if (this.visible) {
      var card = h(_components.ZCard, {
        staticClass: 'z-default-theme-option-panel',
        props: {
          elevation: 0
        }
      }, [this.genCardTitle(h), h(_components.ZDivider), this.genCardBody(h), h(_components.ZCardActions)]);
      var sheet = this.$createElement(_components.ZSheet, {
        staticClass: 'text-center',
        props: {
          height: '300'
        }
      }, [card]);
      return h(_components.ZBottomSheet, {
        props: {
          value: this.visible,
          hideOverlay: true
        },
        on: {
          input: function input(val) {
            _this3.visible = val;
          }
        }
      }, [sheet]);
    }

    return h();
  }
});

exports.ZDefaultThemeOptionPanel = ZDefaultThemeOptionPanel;
var _default = ZDefaultThemeOptionPanel;
exports.default = _default;
//# sourceMappingURL=ZDefaultThemeOptionPanel.js.map