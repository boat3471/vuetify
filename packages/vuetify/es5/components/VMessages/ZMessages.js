"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessages = void 0;

var _VMessages = _interopRequireDefault(require("./VMessages"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMessages = (0, _mixins.default)(_VMessages.default).extend({
  name: 'z-messages'
});
exports.ZMessages = ZMessages;
var _default = ZMessages;
exports.default = _default;
//# sourceMappingURL=ZMessages.js.map