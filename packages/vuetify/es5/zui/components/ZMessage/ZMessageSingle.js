"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessageSingle = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _ZMessageSingleBase = require("./ZMessageSingleBase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZMessageSingle = _vue.default.extend({
  name: 'z-global-message',
  props: {
    type: String,
    icon: String,
    message: String,
    duration: {
      type: Number,
      default: 3000
    },
    customClass: String,
    showClose: {
      type: Boolean,
      default: true
    },
    itemClass: String,
    onClose: Function
  },
  data: function data() {
    return {
      visible: true
    };
  },
  computed: {
    timeout: function timeout() {
      return this.duration <= 0 ? -1 : this.duration;
    }
  },
  methods: {
    getClasses: function getClasses() {
      var list = ['z-message'];

      switch (this.type) {
        case 'info':
          list.push('z-message-info');
          break;

        case 'success':
          list.push('z-message-success');
          break;

        case 'warning':
          list.push('z-message-warning');
          break;

        case 'error':
          list.push('z-message-error');
          break;

        default:
          break;
      }

      if (this.itemClass) {
        list.push(this.itemClass);
      }

      return list.join(' ');
    },
    genIcon: function genIcon() {
      return this.$createElement(_components.ZIcon, {
        props: {
          small: true
        }
      }, [this.icon]);
    },
    genMessage: function genMessage() {
      return this.$createElement('div', {
        staticClass: 'text',
        domProps: {
          innerHTML: this.message
        }
      });
    },
    genActionSlot: function genActionSlot(_ref) {
      var _this = this;

      var attrs = _ref.attrs;

      if (this.showClose) {
        return this.$createElement(_components.ZBtn, {
          attrs: _objectSpread({}, attrs),
          props: {
            icon: true
          },
          on: {
            click: function click() {
              _this.visible = false;
            }
          }
        }, [this.$createElement(_components.ZIcon, {
          staticClass: 'mr-1',
          props: {
            size: 16
          }
        }, ['mdi-close'])]);
      }

      return null;
    },
    genBody: function genBody() {
      return this.$createElement(_ZMessageSingleBase.ZMessageSingleBase, {
        staticClass: this.getClasses(),
        props: {
          value: this.visible,
          timeout: this.timeout,
          color: this.type
        },
        scopedSlots: {
          action: this.genActionSlot
        }
      }, [this.icon ? this.genIcon() : null, this.genMessage()]);
    }
  },
  render: function render(h) {
    return this.genBody();
  }
});

exports.ZMessageSingle = ZMessageSingle;
var _default = ZMessageSingle;
exports.default = _default;
//# sourceMappingURL=ZMessageSingle.js.map