"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultLogo = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _logo = require("./assets/logo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDefaultLogo = _vue.default.extend({
  name: 'z-default-logo',
  props: {},
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {},
  render: function render(h) {
    return h('div', {
      domProps: {
        innerHTML: _logo.logo
      },
      style: {
        lineHeight: 0
      }
    });
  }
});

exports.ZDefaultLogo = ZDefaultLogo;
var _default = ZDefaultLogo;
exports.default = _default;
//# sourceMappingURL=ZDefaultLogo.js.map