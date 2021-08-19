"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSkeletonLoader = void 0;

var _VSkeletonLoader = _interopRequireDefault(require("./VSkeletonLoader"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSkeletonLoader = (0, _mixins.default)(_VSkeletonLoader.default).extend({
  name: 'z-skeleton-loader'
});
exports.ZSkeletonLoader = ZSkeletonLoader;
var _default = ZSkeletonLoader;
exports.default = _default;
//# sourceMappingURL=ZSkeletonLoader.js.map