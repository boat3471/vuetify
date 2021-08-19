"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBreadcrumbsDivider = exports.ZBreadcrumbsItem = exports.ZBreadcrumbs = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBreadcrumbs = (0, _mixins.default)(_index.VBreadcrumbs).extend({
  name: 'z-breadcrumbs'
});
exports.ZBreadcrumbs = ZBreadcrumbs;
var ZBreadcrumbsItem = (0, _mixins.default)(_index.VBreadcrumbsItem).extend({
  name: 'z-breadcrumbs-item'
});
exports.ZBreadcrumbsItem = ZBreadcrumbsItem;
var ZBreadcrumbsDivider = (0, _mixins.default)(_index.VBreadcrumbsDivider).extend({
  name: 'z-breadcrumbs-divider'
});
exports.ZBreadcrumbsDivider = ZBreadcrumbsDivider;
var _default = {
  $_vuetify_subcomponents: {
    ZBreadcrumbs: ZBreadcrumbs,
    ZBreadcrumbsItem: ZBreadcrumbsItem,
    ZBreadcrumbsDivider: ZBreadcrumbsDivider
  }
};
exports.default = _default;
//# sourceMappingURL=ZBreadcrumbs.js.map