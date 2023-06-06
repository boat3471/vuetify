"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAdminApp = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _helpers = require("../../../util/helpers");

require("../../../../src/zui/components/ZAdmin/styles/ZAdmin.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAdminApp = _vue.default.extend({
  name: 'z-admin-application',
  render: function render(h) {
    var defaultSlot = (0, _helpers.getSlot)(this) || h('RouterView', {
      staticClass: 'v-application--wrap'
    });
    return h(_components.ZApp, {
      staticClass: 'z-admin-application',
      props: {
        noWrap: true
      }
    }, [defaultSlot]);
  }
});

exports.ZAdminApp = ZAdminApp;
var _default = ZAdminApp;
exports.default = _default;
//# sourceMappingURL=ZAdminApp.js.map