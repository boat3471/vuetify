"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZFlex = exports.ZLayout = exports.ZSpacer = exports.ZRow = exports.ZCol = exports.ZContainer = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZContainer = (0, _mixins.default)(_index.VContainer).extend({
  name: 'z-container'
});
exports.ZContainer = ZContainer;
var ZCol = (0, _mixins.default)(_index.VCol).extend({
  name: 'z-col'
});
exports.ZCol = ZCol;
var ZRow = (0, _mixins.default)(_index.VRow).extend({
  name: 'z-row'
});
exports.ZRow = ZRow;
var ZSpacer = (0, _mixins.default)(_index.VSpacer).extend({
  name: 'z-spacer'
});
exports.ZSpacer = ZSpacer;
var ZLayout = (0, _mixins.default)(_index.VLayout).extend({
  name: 'z-layout'
});
exports.ZLayout = ZLayout;
var ZFlex = (0, _mixins.default)(_index.VFlex).extend({
  name: 'z-flex'
});
exports.ZFlex = ZFlex;
var _default = {
  $_vuetify_subcomponents: {
    ZContainer: ZContainer,
    ZCol: ZCol,
    ZRow: ZRow,
    ZSpacer: ZSpacer,
    ZLayout: ZLayout,
    ZFlex: ZFlex
  }
};
exports.default = _default;
//# sourceMappingURL=ZGrid.js.map