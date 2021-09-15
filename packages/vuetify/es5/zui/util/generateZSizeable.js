"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateZSizeable;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateZSizeable(classs) {
  return _vue.default.extend({
    name: 'sizeable',
    props: {
      xs: Boolean,
      s: Boolean,
      m: Boolean,
      l: Boolean,
      xl: Boolean
    },
    computed: {
      sizeableClasses: function sizeableClasses() {
        // 组件行内设置优先
        var xs = this.xs;
        var s = this.s;
        var m = this.m;
        var l = this.l;
        var xl = this.xl; // 读取全局设置

        if (!(xs || s || m || l || xl)) {
          var _ref = this.$ui || {},
              defaultSize = _ref.defaultSize;

          var size = defaultSize || 'm';
          xs = size === 'xs';
          s = size === 's';
          m = size === 'm';
          l = size === 'l';
          xl = size === 'xl';
        }

        var result = {};
        classs.forEach(function (c) {
          if (/--x-small$/.test(c)) {
            result[c] = xs;
          } else if (/--small$/.test(c)) {
            result[c] = s;
          } else if (/--default$/.test(c)) {
            result[c] = m;
          } else if (/--large$/.test(c)) {
            result[c] = l;
          } else if (/--x-large$/.test(c)) {
            result[c] = xl;
          }
        });
        return result;
      }
    }
  });
}
//# sourceMappingURL=generateZSizeable.js.map