"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createZui = createZui;

var _vue = _interopRequireDefault(require("vue"));

var _framework = _interopRequireDefault(require("../framework"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建一个 Zui 实例，包含 $vuetify、$ui、$message、$modal
 */
function createZui(options, useOptions) {
  // 安装 vuetify -> zui
  _vue.default.use(_framework.default, useOptions);

  return new _framework.default(_objectSpread({}, options));
}
//# sourceMappingURL=createZui.js.map