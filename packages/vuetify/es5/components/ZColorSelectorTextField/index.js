"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorSelectorTextField = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("../../../components/ZColorSelectorTextField/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var ZColorSelectorTextField = _vue.default.extend(_index.default).extend({
  name: 'z-color-selector-text-field'
});

exports.ZColorSelectorTextField = ZColorSelectorTextField;
var _default = ZColorSelectorTextField;
exports.default = _default;
//# sourceMappingURL=index.js.map