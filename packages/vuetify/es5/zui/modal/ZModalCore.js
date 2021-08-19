"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
exports.modal = exports.ZModalCore = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _modal = _interopRequireDefault(require("../components/modal.vue"));

var _UICore = require("../UICore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 是否初始化完成
 * @internal
 */
var initialized = false;
/**
 * 弹窗视图组件
 * @internal
 */

var ZModal = _vue.default.extend(_modal.default);
/**
 * 消息核心处理器
 */


var ZModalCore =
/*#__PURE__*/
function () {
  function ZModalCore() {
    _classCallCheck(this, ZModalCore);
  }

  _createClass(ZModalCore, [{
    key: "show",

    /**
     * 显示消息
     * @param options
     */
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

      var comp = new ZModal({
        propsData: propsData,
        parent: _UICore.UICore.$app
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
  }]);

  return ZModalCore;
}();
/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$modal` <br>
 * 2. 可引入使用 `import {modal} = '@zwd/z-ui';`
 */


exports.ZModalCore = ZModalCore;
var core = new ZModalCore();
/**
 * 消息组件安装
 * @internal
 */

exports.modal = core;

function install() {
  if (!initialized) {
    initialized = true;
  }

  _vue.default.prototype.getModalList = function () {
    var w = window;
    var list = w.__ZUI_MODAL_LIST;

    if (!list) {
      list = [];
      w.__ZUI_MODAL_LIST = list;
    }

    return list;
  };

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      var $options = this.$options;

      if ($options.modal) {
        this.$modal = core;
      } else {
        $options.parent && (this.$modal = $options.parent.$modal);
      }
    }
  });
}

_vue.default.use(install);
//# sourceMappingURL=ZModalCore.js.map