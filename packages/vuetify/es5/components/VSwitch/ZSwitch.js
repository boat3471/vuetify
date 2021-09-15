"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSwitch = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VSwitch = _interopRequireDefault(require("./VSwitch"));

require("../../../src/components/VSwitch/ZSwitch.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSwitch = (0, _mixins.default)(_VSwitch.default).extend({
  name: 'z-switch',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes: function classes() {
      var map = _VSwitch.default.options.computed.classes.call(this);

      Object.assign(map, {
        'z-switch': true
      });
      return map;
    }
  }
});
exports.ZSwitch = ZSwitch;
var _default = ZSwitch;
exports.default = _default;
//# sourceMappingURL=ZSwitch.js.map