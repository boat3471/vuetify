"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZViewAdmin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

require("../../../../src/zui/components/ZAdmin/styles/ZAdmin.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZViewAdmin = _vue.default.extend({
  name: 'z-admin-application',
  props: {},
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {},
  render: function render(h) {
    var RouterView = _vue.default.component('RouterView');

    return h(_components.ZApp, {
      staticClass: 'z-admin-application',
      props: {
        noWrap: true
      }
    }, [h(RouterView)]);
  }
});

exports.ZViewAdmin = ZViewAdmin;
var _default = ZViewAdmin;
exports.default = _default;
//# sourceMappingURL=ZViewAdmin.js.map