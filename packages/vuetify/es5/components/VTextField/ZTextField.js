"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTextField = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VTextField = _interopRequireDefault(require("./VTextField"));

var _generateZSizeable = _interopRequireDefault(require("../../zui/util/generateZSizeable"));

require("../../../src/components/VTextField/ZTextField/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sizeable = (0, _generateZSizeable.default)(['v-text-field-size--x-small', 'v-text-field-size--small', 'v-text-field-size--default', 'v-text-field-size--large', 'v-text-field-size--x-large']);
var ZTextField = (0, _mixins.default)(_VTextField.default, Sizeable).extend({
  name: 'z-text-field',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes: function classes() {
      var sizeableClasses = this.sizeableClasses;
      return _objectSpread({}, _VTextField.default.options.computed.classes.call(this), {}, sizeableClasses);
    }
  },
  methods: {
    genInput: function genInput() {
      var input = _VTextField.default.options.methods.genInput.call(this);

      if (input.data && input.data.attrs) {
        // 2020-02-05
        // 修改默认输入框自动补全为禁用模式
        input.data.attrs.autocomplete = this.$attrs.autocomplete || 'off';
      }

      return input;
    }
  }
});
exports.ZTextField = ZTextField;
var _default = ZTextField;
exports.default = _default;
//# sourceMappingURL=ZTextField.js.map