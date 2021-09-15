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

var _default = (0, _mixins.default)(_ZColorSelectorMixin.ZColorSelectorMixin).extend({
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
    }
  },
  data: function data() {
    return {
      colorData: {},
      colorHex: ''
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
        this.colorHex = info.color;
      }
    }
  },
  methods: {
    onColorReady: function onColorReady(info) {
      this.colorHex = info.color || '';
    },
    onColorChange: function onColorChange(info) {
      this.colorHex = info.color;
      this.$emit('change', info);
    },
    genColorSelector: function genColorSelector() {
      var data = {
        props: {
          value: this.colorHex,
          defaultValue: this.colorHex
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
      var data = _objectSpread({
        props: {
          outlined: true,
          flat: true,
          class: this.contentClass
        },
        style: {
          display: 'inline-block',
          cursor: 'pointer',
          width: this.w,
          height: this.h,
          backgroundColor: this.colorHex
        }
      }, props);

      return this.$createElement(_components.ZCard, data, []);
    }
  },
  render: function render(h) {
    return h(_components.ZMenu, {
      staticClass: 'z-color-selector-rect--card',
      class: {},
      props: {
        closeOnContentClick: false,
        eager: true,
        offsetY: true
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [this.genColorSelector()]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZColorSelectorRect.js.map