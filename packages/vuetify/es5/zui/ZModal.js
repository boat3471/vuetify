"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZModal = exports.ZModalClass = void 0;

var _ZModal = require("./components/ZModal");

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

var ZModalClass =
/*#__PURE__*/
function () {
  function ZModalClass() {
    _classCallCheck(this, ZModalClass);

    if (!instance) {
      instance = this;
    }

    return instance;
  }
  /**
   * 显示消息
   * @param options
   */


  _createClass(ZModalClass, [{
    key: "show",
    value: function show(options) {
      var propsData = {
        message: ''
      };

      if (typeof options === 'string') {
        propsData.message = options;
      }

      if (_typeof(options) === 'object') {
        propsData = options;
        propsData.top = options.top ? options.top + '' : '';
      }

      var comp = new _ZModal.ZModalSingle({
        propsData: propsData
      }).$mount();
      var result = {
        close: function close() {
          comp.closeForceFun();
          return result;
        },
        then: function then(handle) {
          comp.setSureBeforeFun(handle);
          return result;
        },
        catch: function _catch(handle) {
          comp.setCancelBeforeFun(handle);
          return result;
        }
      };
      return result;
    }
    /**
     * 常规消息
     * @param message
     * @param options
     */

  }, {
    key: "info",
    value: function info(message, options) {
      return this.show(_objectSpread({}, options, {
        message: message || '',
        type: 'info',
        icon: 'mdi-information',
        labelSure: options ? options.labelSure : '知道了',
        showCancel: false
      }));
    }
    /**
     * 成功消息
     * @param message
     * @param options
     */

  }, {
    key: "success",
    value: function success(message, options) {
      return this.show(_objectSpread({}, options, {
        message: message || '',
        type: 'success',
        icon: 'mdi-check-circle',
        labelSure: options ? options.labelSure : '知道了',
        showCancel: false
      }));
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
      return this.show(_objectSpread({}, options, {
        message: message || '',
        type: 'warning',
        icon: 'mdi-alert-circle',
        labelSure: options ? options.labelSure : '知道了',
        showCancel: false
      }));
    }
    /**
     * 错误消息
     * @param message
     * @param options
     */

  }, {
    key: "error",
    value: function error(message, options) {
      return this.show(_objectSpread({}, options, {
        message: message || '',
        type: 'error',
        icon: 'mdi-close-circle',
        labelSure: options ? options.labelSure : '知道了',
        showCancel: false
      }));
    }
    /**
     * 系统提示
     * @param message
     * @param options
     */

  }, {
    key: "system",
    value: function system(message, options) {
      return this.show(_objectSpread({}, options, {
        title: options ? options.title : '提示',
        message: message || '',
        type: 'system',
        labelSure: options ? options.labelSure : '知道了',
        showCancel: false
      }));
    }
    /**
     * 确认
     * @param message
     * @param options
     */

  }, {
    key: "confirm",
    value: function confirm(message, options) {
      return this.show(_objectSpread({}, options, {
        message: message || '',
        type: 'confirm'
      }));
    }
    /**
     * 关闭所有
     */

  }, {
    key: "closeAll",
    value: function closeAll() {// 关闭所以弹窗;
    }
  }, {
    key: "getModalList",
    value: function getModalList() {
      var list = ZModalClass.MODAL_LIST;

      if (!list) {
        list = [];
        ZModalClass.MODAL_LIST = list;
      }

      return list;
    }
  }], [{
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZModalClass();
      }

      return instance;
    }
  }]);

  return ZModalClass;
}();

exports.ZModalClass = ZModalClass;
ZModalClass.MODAL_LIST = [];
/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {ZModal} = '@zwd/z-ui';`
 */

var ZModal = ZModalClass.genInstance();
exports.ZModal = ZModal;
//# sourceMappingURL=ZModal.js.map