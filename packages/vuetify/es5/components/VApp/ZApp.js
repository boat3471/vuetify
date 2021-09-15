"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZApp = void 0;

var _VApp = _interopRequireDefault(require("./VApp"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZApp = (0, _mixins.default)(_VApp.default).extend({
  name: 'z-app',
  props: {
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$ui.emit('ready');
  },
  render: function render(h) {
    var wrapper = [];

    if (this.noWrap) {
      wrapper = this.$slots.default || [];
    } else {
      wrapper = [h('div', {
        staticClass: 'v-application--wrap'
      }, this.$slots.default)];
    }

    return h('div', {
      staticClass: 'v-application',
      class: _objectSpread({
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl
      }, this.themeClasses),
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, _toConsumableArray(wrapper));
  }
});
exports.ZApp = ZApp;
var _default = ZApp;
exports.default = _default;
//# sourceMappingURL=ZApp.js.map