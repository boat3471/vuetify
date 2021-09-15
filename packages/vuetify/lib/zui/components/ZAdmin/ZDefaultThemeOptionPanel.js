import Vue from 'vue';
import { ZBtn, ZBottomSheet, ZSheet, ZCard, ZCardTitle, ZCardText, ZCardActions, ZDivider, ZListItem, ZRow, ZCol, ZSpacer, ZListItemAvatar, ZListItemContent, ZListItemAction, ZListItemTitle, ZIcon, ZColorPicker, ZSwitch, ZSlider } from '../../../components';
import { MainNavMode } from '../../options';
import "../../../../src/zui/components/ZAdmin/styles/ZDefaultThemeOptionPanel.scss";
/**
 * 默认皮肤设置面板
 */

export const ZDefaultThemeOptionPanel = Vue.extend({
  name: 'z-default-theme-option-panel',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: this.value
    };
  },

  computed: {},
  watch: {
    value(val) {
      this.visible = val;
    },

    visible(val) {
      this.$emit('input', val);
    }

  },

  created() {},

  methods: {
    changePrimaryColor(val) {
      this.$theme.settingPrimaryColor(val);
    },

    changeDark(val) {
      this.$theme.settingDarkStatus(val);
    },

    changeDenseMode(val) {
      this.$theme.settingTheme({
        denseMode: val
      });
    },

    changeMainNavMode(val) {
      this.$theme.settingTheme({
        mainNavMode: val ? MainNavMode.Flex : MainNavMode.Visible,
        mainNavMiniMode: !val ? false : this.$themeStore.mainNavMiniMode
      });
    },

    changeMainNavPosition(val) {
      this.$theme.settingTheme({
        mainNavPosition: val
      });
    },

    changeMainMenuExpandMode(val) {
      if (this.$themeStore.mainNavMode === MainNavMode.Visible && !val) {
        this.$menu.resetStatus();
        this.$menu.activeByRoute();
      }

      this.$theme.settingTheme({
        mainMenuExpandMode: val
      });
    },

    changeMainMenuWidth(val) {
      this.$theme.settingTheme({
        mainMenuWidth: val
      });
    },

    genCardTitle(h) {
      const listItem = h(ZListItem, [h(ZListItemAvatar, {
        props: {
          color: this.$themeStore.primaryColor
        }
      }), h(ZListItemContent, [h(ZListItemTitle, {
        staticClass: 'headline'
      }, ['主题设置'])]), h(ZListItemAction, [h(ZBtn, {
        props: {
          icon: true
        },
        on: {
          click: () => {
            this.visible = !this.visible;
          }
        }
      }, [h(ZIcon, ['mdi-close'])])])]);
      const row = h(ZRow, {
        props: {
          noGutter: true
        }
      }, [h(ZCol, {
        props: {
          cols: 'auto'
        }
      }), h(ZSpacer), h(ZCol, {
        props: {
          cols: 'auto'
        }
      })]);
      return h(ZCardTitle, {}, [listItem, row]);
    },

    genCardBody(h) {
      const col1 = h(ZCol, {
        props: {
          col: 3
        }
      }, [h(ZColorPicker, {
        staticClass: 'ma-2',
        props: {
          value: this.$themeStore.primaryColor,
          canvasHeight: '100',
          hideInputs: true
        },
        on: {
          'update:color': val => {
            this.changePrimaryColor(val.hex);
          }
        }
      })]);
      const col2 = h(ZCol, [h(ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.darkStatus,
          label: '切换暗色主题'
        },
        on: {
          change: this.changeDark
        }
      }), h(ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.denseMode,
          label: '切换紧凑模式'
        },
        on: {
          change: this.changeDenseMode
        }
      }), h(ZSwitch, {
        staticClass: 'ml-6 mb-2',
        props: {
          inputValue: this.$themeStore.cameraModel,
          label: '切换相机模式'
        },
        on: {
          change: val => {
            this.$theme.settingTheme({
              cameraModel: val
            });
          }
        }
      })]);
      const col3 = h(ZCol, [h(ZSlider, {
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
      }), h(ZSwitch, {
        staticClass: 'mb-2 ml-2',
        props: {
          inputValue: this.$themeStore.mainNavMode === MainNavMode.Flex,
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
      }, ['开启时支持mini模式，关闭时支持隐藏显示']), h(ZSwitch, {
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
      }, ['开启时主菜单显示位置在框架内']), h(ZSwitch, {
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
      return h(ZCardText, [h(ZRow, {
        props: {
          noGutter: true,
          justify: 'start'
        }
      }, [col1, col2, col3, h(ZCol)])]);
    }

  },

  render(h) {
    if (this.visible) {
      const card = h(ZCard, {
        staticClass: 'z-default-theme-option-panel',
        props: {
          elevation: 0
        }
      }, [this.genCardTitle(h), h(ZDivider), this.genCardBody(h), h(ZCardActions)]);
      const sheet = this.$createElement(ZSheet, {
        staticClass: 'text-center',
        props: {
          height: '300'
        }
      }, [card]);
      return h(ZBottomSheet, {
        props: {
          value: this.visible,
          hideOverlay: true
        },
        on: {
          input: val => {
            this.visible = val;
          }
        }
      }, [sheet]);
    }

    return h();
  }

});
export default ZDefaultThemeOptionPanel;
//# sourceMappingURL=ZDefaultThemeOptionPanel.js.map