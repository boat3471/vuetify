"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMain = void 0;

var _VMain = _interopRequireDefault(require("./VMain"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ZMain = (0, _mixins.default)(_VMain.default).extend({
  name: 'z-main',
  props: {
    noWrap: {
      type: Boolean,
      default: false
    },
    noOverflow: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var styles = this.styles;
    var styleWrap = {};

    if (this.noOverflow) {
      styles.height = '100vh';
      styleWrap.overflowY = 'auto';
    }

    var data = {
      staticClass: 'v-main',
      style: styles,
      ref: 'main'
    };
    var wrapper = [];

    if (this.noWrap) {
      wrapper = this.$slots.default || [];
    } else {
      wrapper = [h('div', {
        staticClass: 'v-main__wrap',
        style: styleWrap
      }, this.$slots.default)];
    }

    return h(this.tag, data, _toConsumableArray(wrapper));
  }
});
exports.ZMain = ZMain;
var _default = ZMain;
exports.default = _default;
//# sourceMappingURL=ZMain.js.map