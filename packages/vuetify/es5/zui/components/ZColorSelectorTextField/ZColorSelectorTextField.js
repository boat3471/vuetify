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
  name: 'z-color-selector-text-filed',
  props: {
    value: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: String,
      default: '#FFFFFF'
    },
    position: {
      type: String,
      default: 'prepend'
    },
    inputWidth: {
      type: String || Number,
      default: '120px'
    },
    transparent: Boolean,
    closeOnContentClick: Boolean
  },
  data: function data() {
    return {
      colorData: {},
      inputValue: this.value,
      rectColor: this.value
    };
  },
  computed: {},
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var theme = this.findThemeByName(value);

        if (theme) {
          this.inputValue = theme.name;
          this.rectColor = theme.color || '';
        } else {
          this.inputValue = value;
          this.rectColor = value;
        }
      }
    }
  },
  methods: {
    checkColor: function checkColor(val) {
      val = val.trim();

      if (!val) {
        return true;
      }

      var theme = this.findThemeByName(val);

      if (theme) {
        return true;
      }

      var info = this.getColorInfo(val);

      if (info.valid) {
        return true;
      }

      return '无效的颜色';
    },
    onColorChange: function onColorChange(info) {
      this.inputValue = info.name;
      this.rectColor = info.color;
      this.$emit('change', info);
    },
    onInputValue: function onInputValue(val) {
      this.inputValue = val;
      this.emitChange(val);
    },
    onInputChange: function onInputChange(event) {
      if (event.key === 'Enter' || event.type === 'blur') {
        var val = this.inputValue.trim();
        this.emitChange(val);
      }
    },
    emitChange: function emitChange(val) {
      if (val) {
        var theme = this.findThemeByName(val);

        if (theme) {
          this.rectColor = theme.color || '';
          this.$emit('change', {
            name: theme.name,
            color: theme.color,
            isTheme: true
          });
        } else {
          var info = this.getColorInfo(val);

          if (info && info.valid) {
            this.rectColor = info.value === 'transparent' ? 'transparent' : info.hex || '';
            this.$emit('change', {
              name: val,
              color: info.hex
            });
          }
        }
      }
    },
    genPrependSlot: function genPrependSlot() {
      return this.$createElement(_components.ZColorSelectorRect, {
        slot: 'prepend',
        props: {
          width: '22',
          height: '22',
          value: this.rectColor,
          defaultValue: this.defaultValue,
          transparent: this.transparent,
          closeOnContentClick: this.closeOnContentClick
        },
        on: {
          change: this.onColorChange
        }
      });
    }
  },
  render: function render(h) {
    return h(_components.ZTextField, {
      staticClass: 'z-color-selector-rect--card',
      attrs: _objectSpread({}, this.$attrs),
      props: {
        value: this.inputValue,
        outlined: true,
        hideDetails: true,
        xs: true,
        width: this.inputWidth,
        rules: [this.checkColor]
      },
      style: {
        width: this.inputWidth || '120px'
      },
      on: {
        blur: this.onInputChange,
        keydown: this.onInputChange,
        input: this.onInputValue
      }
    }, [this.genPrependSlot()]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZColorSelectorTextField.js.map