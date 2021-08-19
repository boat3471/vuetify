"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBtn = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VBtn = _interopRequireDefault(require("./VBtn"));

var _generateZSizeable = _interopRequireDefault(require("../../zui/util/generateZSizeable"));

require("../../../src/zui/styles/ZBtn/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sizeable = (0, _generateZSizeable.default)(['z-btn-size--x-small', 'z-btn-size--small', 'z-btn-size--default', 'z-btn-size--large', 'z-btn-size--x-large', 'v-size--x-small', 'v-size--small', 'v-size--default', 'v-size--large', 'v-size--x-large']);
var ZBtn = (0, _mixins.default)(_VBtn.default, Sizeable).extend({
  name: 'z-btn',
  computed: {
    classes: function classes() {
      var map = _VBtn.default.options.computed.classes.call(this);

      Object.assign(map, {
        'z-btn': true
      });
      return map;
    }
  }
});
exports.ZBtn = ZBtn;
var _default = ZBtn;
exports.default = _default;
//# sourceMappingURL=ZBtn.js.map