"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixins = _interopRequireDefault(require("../../../util/mixins"));

var _ZColorSelectorMixin = require("../../mixins/ZColorSelectorMixin");

var _components = require("../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default2 = (0, _mixins.default)(_ZColorSelectorMixin.ZColorSelectorMixin).extend({
  name: 'z-color-selector-rect',
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
    contentClass: {
      type: String,
      default: ''
    },
    contentStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    transparent: {
      type: Boolean,
      default: true
    },
    none: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: Boolean
  },
  data: function data() {
    return {
      colorData: {},
      colorHex: '',
      colorName: ''
    };
  },
  computed: {
    w: function w() {
      var w = this.width;
      return isNaN(w) ? w : "".concat(w, "px");
    },
    h: function h() {
      var h = this.height;
      return isNaN(h) ? h : "".concat(h, "px");
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var info = this.getColorByName(value);

        switch (value) {
          case 'transparent':
            this.colorHex = 'transparent';
            this.colorName = 'transparent';
            break;

          case '':
          case 'none':
            this.colorHex = '';
            this.colorName = 'none';
            break;

          default:
            this.colorHex = info.color || '';
            this.colorName = info.name;
        }
      }
    }
  },
  methods: {
    onColorReady: function onColorReady(info) {
      this.colorHex = info.color === 'none' ? '' : info.color || '';
      this.colorName = info.name;
    },
    onColorChange: function onColorChange(info) {
      this.colorHex = info.color === 'none' ? '' : info.color || '';
      this.colorName = info.name;
      this.$emit('change', info);
    },
    genColorSelector: function genColorSelector() {
      var data = {
        props: {
          value: this.colorHex,
          defaultValue: this.colorHex,
          transparent: this.transparent,
          none: this.none
        },
        on: {
          ready: this.onColorReady,
          change: this.onColorChange
        }
      };
      var colorSelector = this.$createElement(_components.ZColorSelector, data, []);
      return this.$createElement(_components.ZCard, {
        props: {
          flat: true
        }
      }, [colorSelector]);
    },
    genActivatorSlot: function genActivatorSlot(props) {
      var bg = this.colorName === 'transparent' ? 'transparent-bg' : '';

      var data = _objectSpread({
        staticClass: "d-flex align-center justify-center ".concat(bg, " ").concat(this.contentClass),
        props: {
          outlined: true,
          flat: true
        },
        style: _objectSpread({
          cursor: 'pointer',
          width: this.w,
          height: this.h,
          backgroundColor: this.colorHex
        }, this.contentStyle)
      }, props);

      var icons = [];

      if (this.colorName === 'none' || this.colorName === '') {
        icons.push(this.$createElement('z-icon', {
          props: {
            size: '16'
          }
        }, 'mdi-cancel'));
      }

      return this.$createElement(_components.ZCard, data, icons);
    }
  },
  render: function render(h) {
    return h(_components.ZMenu, {
      staticClass: 'z-color-selector-rect--card',
      class: {},
      props: {
        closeOnContentClick: this.closeOnContentClick === true,
        eager: true,
        offsetY: true
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [this.genColorSelector()]);
  }
});

exports.default = _default2;
//# sourceMappingURL=ZColorSelectorRect.js.map