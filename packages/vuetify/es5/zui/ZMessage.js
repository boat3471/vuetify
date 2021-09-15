"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZMessage = exports.ZMessageClass = void 0;

var _ZMessage = require("./components/ZMessage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance;
/**
 * 消息管理器
 */

var ZMessageClass =
/*#__PURE__*/
function () {
  function ZMessageClass() {
    _classCallCheck(this, ZMessageClass);

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  _createClass(ZMessageClass, [{
    key: "show",

    /**
     * 显示消息
     * @param options
     */
    value: function show(options) {
      var content = '';

      if (_typeof(options) !== 'object') {
        content = options + '';
        options = {
          type: 'info',
          message: content,
          icon: 'mdi-information'
        };
      } else {
        content = options.message || '';
      }

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
    /**
     * 常规消息
     * @param message
     * @param options
     */

  }, {
    key: "info",
    value: function info(message, options) {
      var container = ZMessageClass.genWrapper();
      var comp = new _ZMessage.ZMessageSingle({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'info',
          icon: 'mdi-information'
        }),
        parent: container
      }).$mount();
      container && container.$el.appendChild(comp.$el);
    }
    /**
     * 成功消息
     * @param message
     * @param options
     */

  }, {
    key: "success",
    value: function success(message, options) {
      var container = ZMessageClass.genWrapper();
      var comp = new _ZMessage.ZMessageSingle({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'success',
          icon: 'mdi-check-circle'
        }),
        parent: container
      }).$mount();
      container && container.$el.appendChild(comp.$el);
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
      var container = ZMessageClass.genWrapper();
      var comp = new _ZMessage.ZMessageSingle({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'warning',
          icon: 'mdi-alert-circle'
        }),
        parent: container
      }).$mount();
      container && container.$el.appendChild(comp.$el);
    }
    /**
     * 错误消息
     * @param message
     * @param options
     */

  }, {
    key: "error",
    value: function error(message, options) {
      var container = ZMessageClass.genWrapper();
      var comp = new _ZMessage.ZMessageSingle({
        propsData: _objectSpread({}, options, {
          message: message || '',
          type: 'error',
          icon: 'mdi-close-circle'
        }),
        parent: container
      }).$mount();
      container && container.$el.appendChild(comp.$el);
    }
  }, {
    key: "getMessageList",
    value: function getMessageList() {
      var list = ZMessageClass.MESSAGE_LIST;

      if (!list) {
        list = [];
        ZMessageClass.MESSAGE_LIST = list;
      }

      return list;
    }
  }], [{
    key: "genWrapper",
    value: function genWrapper() {
      if (!ZMessageClass.__wrapper) {
        var app = document.getElementById(ZMessageClass.appId);
        var div = document.createElement('div');
        app && app.appendChild(div);
        ZMessageClass.__wrapper = new _ZMessage.ZMessageContainer({}).$mount(div);
      }

      return ZMessageClass.__wrapper;
    }
  }, {
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZMessageClass();
      }

      return instance;
    }
  }]);

  return ZMessageClass;
}();

exports.ZMessageClass = ZMessageClass;
ZMessageClass.MESSAGE_LIST = [];
ZMessageClass.appId = 'app';
/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {ZMessage} = '@zwd/z-ui';`
 */

var ZMessage = ZMessageClass.genInstance();
exports.ZMessage = ZMessage;
//# sourceMappingURL=ZMessage.js.map