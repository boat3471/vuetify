"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCarouselItem = exports.ZCarousel = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCarousel = (0, _mixins.default)(_index.VCarousel).extend({
  name: 'z-carousel'
});
exports.ZCarousel = ZCarousel;
var ZCarouselItem = (0, _mixins.default)(_index.VCarouselItem).extend({
  name: 'z-carousel-item'
});
exports.ZCarouselItem = ZCarouselItem;
var _default = {
  $_vuetify_subcomponents: {
    ZCarousel: ZCarousel,
    ZCarouselItem: ZCarouselItem
  }
};
exports.default = _default;
//# sourceMappingURL=ZCarousel.js.map