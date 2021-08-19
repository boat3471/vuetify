"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTextarea = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VTextarea = _interopRequireDefault(require("./VTextarea"));

var _generateZSizeable = _interopRequireDefault(require("../../zui/util/generateZSizeable"));

require("../../../src/zui/styles/ZTextarea/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZTextareaSizeable = (0, _generateZSizeable.default)(['z-textarea-size--x-small', 'z-textarea-size--small', 'z-textarea-size--default', 'z-textarea-size--large', 'z-textarea-size--x-large']);
var ZTextarea = (0, _mixins.default)(_VTextarea.default, ZTextareaSizeable).extend({
  name: 'z-textarea',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes: function classes() {
      var sizeableClasses = this.sizeableClasses;
      return _objectSpread({}, _VTextarea.default.options.computed.classes.call(this), {}, sizeableClasses);
    }
  }
});
exports.ZTextarea = ZTextarea;
var _default = ZTextarea;
exports.default = _default;
//# sourceMappingURL=ZTextarea.js.map