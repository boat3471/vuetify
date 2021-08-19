"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZMessageCore = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _message = _interopRequireDefault(require("../components/message.vue"));

var _ZMessage = require("../../components/ZMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 消息视图组件
 * @internal
 */
var ZMessage = _vue.default.extend(_message.default);
/**
 * 消息核心处理器
 */


var ZMessageCore =
/*#__PURE__*/
function () {
  function ZMessageCore() {
    _classCallCheck(this, ZMessageCore);
  }

  _createClass(ZMessageCore, [{
    key: "show",

    /**
     * 显示消息
     * @param options{MessageOptions|string}
     */
    value: function show(options) {
      var content = typeof options === 'string' ? options : options.message || '';

      if (options && typeof options !== 'string') {
        switch (options.type) {
          case 'info':
            return this.info(content, options);

          case 'success':
            return this.success(content, options);

          case 'warn':
          case 'warning':
            return this.warning(content, options);

          case 'error':
            return this.error(content, options);

          default:
            break;
        }
      }
    }
    /**
     * 常规消息
     * @param message
     * @param options
     */

  }, {
    key: "info",
    value: function info(message, options) {
      var comp = new ZMessage({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'info',
          icon: 'mdi-information'
        }),
        parent: _ZMessage.zMessageContainer
      }).$mount();
      _ZMessage.zMessageContainer && _ZMessage.zMessageContainer.$el.appendChild(comp.$el);
    }
    /**
     * 成功消息
     * @param message
     * @param options
     */

  }, {
    key: "success",
    value: function success(message, options) {
      var comp = new ZMessage({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'success',
          icon: 'mdi-check-circle'
        }),
        parent: _ZMessage.zMessageContainer
      }).$mount();
      _ZMessage.zMessageContainer && _ZMessage.zMessageContainer.$el.appendChild(comp.$el);
    }
    /**
     * 告警消息
     * @param message
     * @param options
     */

  }, {
    key: "warn",
    value: function warn(message, options) {
      return this.warning(message, options);
    }
    /**
     * 告警消息
     * @param message
     * @param options
     */

  }, {
    key: "warning",
    value: function warning(message, options) {
      var comp = new ZMessage({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'warning',
          icon: 'mdi-alert-circle'
        }),
        parent: _ZMessage.zMessageContainer
      }).$mount();
      _ZMessage.zMessageContainer && _ZMessage.zMessageContainer.$el.appendChild(comp.$el);
    }
    /**
     * 错误消息
     * @param message
     * @param options
     */

  }, {
    key: "error",
    value: function error(message, options) {
      var comp = new ZMessage({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'error',
          icon: 'mdi-close-circle'
        }),
        parent: _ZMessage.zMessageContainer
      }).$mount();
      _ZMessage.zMessageContainer && _ZMessage.zMessageContainer.$el.appendChild(comp.$el);
    }
  }]);

  return ZMessageCore;
}();

exports.ZMessageCore = ZMessageCore;
//# sourceMappingURL=ZMessageCore.js.map