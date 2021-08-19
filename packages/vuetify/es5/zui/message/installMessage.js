"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
exports.message = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ZMessageCore = require("./ZMessageCore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$message` <br>
 * 2. 可引入使用 `import {message} = '@zwd/z-ui';`
 */
var core = new _ZMessageCore.ZMessageCore();
/**
 * 消息组件安装
 * @internal
 */

exports.message = core;

function install() {
  _vue.default.prototype.getMessageList = function () {
    var w = window;
    var list = w.__ZUI_MESSAGE_LIST;

    if (!list) {
      list = [];
      w.__ZUI_MESSAGE_LIST = list;
    }

    return list;
  };

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      var $options = this.$options;

      if ($options.message) {
        this.$message = core;
      } else {
        $options.parent && (this.$message = $options.parent.$message);
      }
    }
  });
}

_vue.default.use(install);
//# sourceMappingURL=installMessage.js.map