"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDialog = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VDialog = _interopRequireDefault(require("./VDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDialog = (0, _mixins.default)(_VDialog.default).extend({
  name: 'z-dialog',
  props: {
    top: {
      type: String,
      default: ''
    }
  },
  methods: {
    genInnerContent: function genInnerContent() {
      var comp = _VDialog.default.options.methods.genInnerContent.call(this);

      var top = this.$props.top;

      if (top) {
        top = (top + '').replace(/[^0-9]/g, '');

        if (comp && comp.data && comp.data.style) {
          // @ts-ignore
          comp.data.style.top = "".concat(top, "px"); // @ts-ignore

          comp.data.style.position = 'fixed';
        }
      }

      return comp;
    }
  }
});
exports.ZDialog = ZDialog;
var _default = ZDialog;
exports.default = _default;
//# sourceMappingURL=ZDialog.js.map