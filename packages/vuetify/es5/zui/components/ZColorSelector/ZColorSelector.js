"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixins = _interopRequireDefault(require("../../../util/mixins"));

var _ZColorSelectorMixin = require("../../mixins/ZColorSelectorMixin");

var _components = require("../../../components");

require("../../../../src/zui/components/ZColorSelector/ZColorPicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _mixins.default)(_ZColorSelectorMixin.ZColorSelectorMixin).extend({
  name: 'z-color-selector',
  props: {
    height: {
      type: [Number, String],
      default: 20
    },
    width: {
      type: [Number, String],
      default: 20
    },
    value: {
      type: String,
      default: ''
    },
    transparent: {
      type: Boolean,
      default: true
    },
    none: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      colorData: {},
      colorName: '',
      colorHex: '',
      initialName: '',
      initialColor: '',
      historyColors: this.getHistoryColors(),
      themeOptions: this.getThemeColorOptions(),
      lastInfo: {},
      firstUpdateColor: true
    };
  },
  computed: {},
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var lastInfo = this.lastInfo;

        if (lastInfo && (value === lastInfo.name || value === lastInfo.color)) {
          return;
        }

        var info = this.getColorByName(value);
        this.colorData = info;
        this.colorName = info.name || '';
        this.colorHex = info.color;
        this.lastInfo = info;

        if (!this.initialColor) {
          this.initialName = info.name;
          this.initialColor = info.color;
        }
      }
    }
  },
  mounted: function mounted() {
    this.$emit('ready', {
      name: this.colorName,
      color: this.colorHex
    });
  },
  methods: {
    onUpdateColor: function onUpdateColor(value) {
      if (this.firstUpdateColor) {
        this.firstUpdateColor = false;

        if (this.value === 'none' || this.value === '' || this.value === 'transparent') {
          return;
        }
      }

      this.colorData = value;
      this.colorHex = value.hex;
      this.colorName = value.hex;
    },
    onUpdateAfter: function onUpdateAfter() {
      this.emitColorChange();
    },

    /** 点击圆盘记录历史颜色 */
    onActionDot: function onActionDot() {
      this.addHistoryColor(this.colorHex);
    },

    /** 提交颜色 */
    emitColorChange: function emitColorChange() {
      var colorName = this.colorName,
          colorHex = this.colorHex;

      if (colorHex) {
        this.$emit('change', {
          name: colorName || colorHex,
          color: colorName === 'none' ? '' : colorHex,
          isTheme: false
        });
      }
    },

    /** 点击颜色 */
    onClickColor: function onClickColor(type, colorName, colorValue) {
      switch (type) {
        case 'history':
          // 点击历史颜色时
          this.colorName = colorValue || '';
          this.colorHex = colorValue || '';
          this.emitColorChange();
          break;

        case 'theme':
          // 点击主题颜色时
          if (!colorValue) {
            colorValue = this.getVuetifyThemeColor(colorName);
          }

          this.colorName = colorName;
          this.colorHex = colorValue || '';
          this.$emit('change', {
            name: colorName,
            color: colorValue,
            isTheme: true
          });
          break;

        case 'initial':
          // 点击初始颜色
          this.colorName = colorName;
          this.colorHex = colorValue || '';
          this.emitColorChange();
          break;
      }
    },
    genColorPicker: function genColorPicker() {
      var data = {
        props: {
          value: this.colorHex,
          // dotSize: '10',
          hideModeSwitch: true,
          mode: 'hexa'
        },
        on: {
          'update:color': this.onUpdateColor,
          'update:after': this.onUpdateAfter,
          'action:dot': this.onActionDot
        }
      };
      return this.$createElement(_components.ZColorPicker, data, ['genThemeColorContent']);
    },
    genColorCard: function genColorCard(colorName, title, type, colorValue) {
      var _this = this;

      var style = {};
      var classes = ['mr-1'];

      if (type === 'theme') {
        classes.push(colorName);
      } else {
        style.backgroundColor = colorName;
      }

      if (colorName === 'transparent') {
        classes.push('color--item-transparent');
      } else {
        classes.push('color--item');
      }

      var children = [];

      if (colorName === 'none') {
        children.push(this.$createElement('z-icon', 'mdi-cancel'));
      }

      var data = {
        staticClass: classes.join(' '),
        props: {
          flat: true,
          outlined: true,
          title: title
        },
        style: style,
        on: {
          click: function click() {
            switch (type) {
              case 'history':
                _this.onClickColor(type, colorName, colorName);

                break;

              case 'theme':
                _this.onClickColor(type, colorName, colorValue);

                break;

              case 'initial':
                break;
            }
          }
        }
      };
      return this.$createElement(_components.ZCard, data, children);
    },
    genThemeColorContent: function genThemeColorContent() {
      var _this2 = this;

      var data = {
        staticClass: 'theme-colors pb-2 px-3'
      };
      return this.$createElement('div', data, [this.none ? this.genColorCard('none', '无', 'history') : null, this.transparent ? this.genColorCard('transparent', '透明', 'history', '#00000000') : null, this.genColorCard('#FFFFFF', '白色', 'history'), this.genColorCard('#000000', '黑色', 'history'), this.$createElement('z-divider', {
        staticClass: 'ml-1 mr-2',
        props: {
          vertical: true
        }
      }), this.themeOptions.map(function (i) {
        return _this2.genColorCard(i.name, i.label, 'theme', i.color);
      })]);
    },
    genHistoryColorContent: function genHistoryColorContent() {
      var _this3 = this;

      var data = {
        staticClass: 'history-colors pb-4 px-3'
      };
      return this.$createElement('div', data, [this.genColorCard('#FFFFFF', '白色', 'history'), this.historyColors.map(function (i) {
        return _this3.genColorCard(i, i, 'history');
      })]);
    }
  },
  render: function render(h) {
    return h(_components.ZCard, {
      staticClass: 'z-color-selector-card',
      class: {},
      props: {}
    }, [this.genColorPicker(), this.genThemeColorContent(), this.genHistoryColorContent()]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZColorSelector.js.map