"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZExpandXTransition = exports.ZExpandTransition = exports.ZSlideYReverseTransition = exports.ZSlideYTransition = exports.ZSlideXReverseTransition = exports.ZSlideXTransition = exports.ZScrollYReverseTransition = exports.ZScrollYTransition = exports.ZScrollXReverseTransition = exports.ZScrollXTransition = exports.ZScaleTransition = exports.ZFadeTransition = exports.ZDialogTopTransition = exports.ZDialogBottomTransition = exports.ZDialogTransition = exports.ZFabTransition = exports.ZMenuTransition = exports.ZTabReverseTransition = exports.ZTabTransition = exports.ZCarouselReverseTransition = exports.ZCarouselTransition = exports.VExpandXTransition = exports.VExpandTransition = exports.VSlideYReverseTransition = exports.VSlideYTransition = exports.VSlideXReverseTransition = exports.VSlideXTransition = exports.VScrollYReverseTransition = exports.VScrollYTransition = exports.VScrollXReverseTransition = exports.VScrollXTransition = exports.VScaleTransition = exports.VFadeTransition = exports.VDialogTopTransition = exports.VDialogBottomTransition = exports.VDialogTransition = exports.VFabTransition = exports.VMenuTransition = exports.VTabReverseTransition = exports.VTabTransition = exports.VCarouselReverseTransition = exports.VCarouselTransition = void 0;

var _createTransition = require("./createTransition");

var _expandTransition = _interopRequireDefault(require("./expand-transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component specific transitions
var VCarouselTransition = (0, _createTransition.createSimpleTransition)('carousel-transition');
exports.VCarouselTransition = VCarouselTransition;
var VCarouselReverseTransition = (0, _createTransition.createSimpleTransition)('carousel-reverse-transition');
exports.VCarouselReverseTransition = VCarouselReverseTransition;
var VTabTransition = (0, _createTransition.createSimpleTransition)('tab-transition');
exports.VTabTransition = VTabTransition;
var VTabReverseTransition = (0, _createTransition.createSimpleTransition)('tab-reverse-transition');
exports.VTabReverseTransition = VTabReverseTransition;
var VMenuTransition = (0, _createTransition.createSimpleTransition)('menu-transition');
exports.VMenuTransition = VMenuTransition;
var VFabTransition = (0, _createTransition.createSimpleTransition)('fab-transition', 'center center', 'out-in'); // Generic transitions

exports.VFabTransition = VFabTransition;
var VDialogTransition = (0, _createTransition.createSimpleTransition)('dialog-transition');
exports.VDialogTransition = VDialogTransition;
var VDialogBottomTransition = (0, _createTransition.createSimpleTransition)('dialog-bottom-transition');
exports.VDialogBottomTransition = VDialogBottomTransition;
var VDialogTopTransition = (0, _createTransition.createSimpleTransition)('dialog-top-transition');
exports.VDialogTopTransition = VDialogTopTransition;
var VFadeTransition = (0, _createTransition.createSimpleTransition)('fade-transition');
exports.VFadeTransition = VFadeTransition;
var VScaleTransition = (0, _createTransition.createSimpleTransition)('scale-transition');
exports.VScaleTransition = VScaleTransition;
var VScrollXTransition = (0, _createTransition.createSimpleTransition)('scroll-x-transition');
exports.VScrollXTransition = VScrollXTransition;
var VScrollXReverseTransition = (0, _createTransition.createSimpleTransition)('scroll-x-reverse-transition');
exports.VScrollXReverseTransition = VScrollXReverseTransition;
var VScrollYTransition = (0, _createTransition.createSimpleTransition)('scroll-y-transition');
exports.VScrollYTransition = VScrollYTransition;
var VScrollYReverseTransition = (0, _createTransition.createSimpleTransition)('scroll-y-reverse-transition');
exports.VScrollYReverseTransition = VScrollYReverseTransition;
var VSlideXTransition = (0, _createTransition.createSimpleTransition)('slide-x-transition');
exports.VSlideXTransition = VSlideXTransition;
var VSlideXReverseTransition = (0, _createTransition.createSimpleTransition)('slide-x-reverse-transition');
exports.VSlideXReverseTransition = VSlideXReverseTransition;
var VSlideYTransition = (0, _createTransition.createSimpleTransition)('slide-y-transition');
exports.VSlideYTransition = VSlideYTransition;
var VSlideYReverseTransition = (0, _createTransition.createSimpleTransition)('slide-y-reverse-transition'); // Javascript transitions

exports.VSlideYReverseTransition = VSlideYReverseTransition;
var VExpandTransition = (0, _createTransition.createJavascriptTransition)('expand-transition', (0, _expandTransition.default)());
exports.VExpandTransition = VExpandTransition;
var VExpandXTransition = (0, _createTransition.createJavascriptTransition)('expand-x-transition', (0, _expandTransition.default)('', true));
exports.VExpandXTransition = VExpandXTransition;
var ZCarouselTransition = (0, _createTransition.createSimpleTransition)('carousel-transition');
exports.ZCarouselTransition = ZCarouselTransition;
var ZCarouselReverseTransition = (0, _createTransition.createSimpleTransition)('carousel-reverse-transition');
exports.ZCarouselReverseTransition = ZCarouselReverseTransition;
var ZTabTransition = (0, _createTransition.createSimpleTransition)('tab-transition');
exports.ZTabTransition = ZTabTransition;
var ZTabReverseTransition = (0, _createTransition.createSimpleTransition)('tab-reverse-transition');
exports.ZTabReverseTransition = ZTabReverseTransition;
var ZMenuTransition = (0, _createTransition.createSimpleTransition)('menu-transition');
exports.ZMenuTransition = ZMenuTransition;
var ZFabTransition = (0, _createTransition.createSimpleTransition)('fab-transition', 'center center', 'out-in'); // Generic transitions

exports.ZFabTransition = ZFabTransition;
var ZDialogTransition = (0, _createTransition.createSimpleTransition)('dialog-transition');
exports.ZDialogTransition = ZDialogTransition;
var ZDialogBottomTransition = (0, _createTransition.createSimpleTransition)('dialog-bottom-transition');
exports.ZDialogBottomTransition = ZDialogBottomTransition;
var ZDialogTopTransition = (0, _createTransition.createSimpleTransition)('dialog-top-transition');
exports.ZDialogTopTransition = ZDialogTopTransition;
var ZFadeTransition = (0, _createTransition.createSimpleTransition)('fade-transition');
exports.ZFadeTransition = ZFadeTransition;
var ZScaleTransition = (0, _createTransition.createSimpleTransition)('scale-transition');
exports.ZScaleTransition = ZScaleTransition;
var ZScrollXTransition = (0, _createTransition.createSimpleTransition)('scroll-x-transition');
exports.ZScrollXTransition = ZScrollXTransition;
var ZScrollXReverseTransition = (0, _createTransition.createSimpleTransition)('scroll-x-reverse-transition');
exports.ZScrollXReverseTransition = ZScrollXReverseTransition;
var ZScrollYTransition = (0, _createTransition.createSimpleTransition)('scroll-y-transition');
exports.ZScrollYTransition = ZScrollYTransition;
var ZScrollYReverseTransition = (0, _createTransition.createSimpleTransition)('scroll-y-reverse-transition');
exports.ZScrollYReverseTransition = ZScrollYReverseTransition;
var ZSlideXTransition = (0, _createTransition.createSimpleTransition)('slide-x-transition');
exports.ZSlideXTransition = ZSlideXTransition;
var ZSlideXReverseTransition = (0, _createTransition.createSimpleTransition)('slide-x-reverse-transition');
exports.ZSlideXReverseTransition = ZSlideXReverseTransition;
var ZSlideYTransition = (0, _createTransition.createSimpleTransition)('slide-y-transition');
exports.ZSlideYTransition = ZSlideYTransition;
var ZSlideYReverseTransition = (0, _createTransition.createSimpleTransition)('slide-y-reverse-transition'); // Javascript transitions

exports.ZSlideYReverseTransition = ZSlideYReverseTransition;
var ZExpandTransition = (0, _createTransition.createJavascriptTransition)('expand-transition', (0, _expandTransition.default)());
exports.ZExpandTransition = ZExpandTransition;
var ZExpandXTransition = (0, _createTransition.createJavascriptTransition)('expand-x-transition', (0, _expandTransition.default)('', true));
exports.ZExpandXTransition = ZExpandXTransition;
var _default = {
  $_vuetify_subcomponents: {
    VCarouselTransition: VCarouselTransition,
    VCarouselReverseTransition: VCarouselReverseTransition,
    VDialogTransition: VDialogTransition,
    VDialogBottomTransition: VDialogBottomTransition,
    VDialogTopTransition: VDialogTopTransition,
    VFabTransition: VFabTransition,
    VFadeTransition: VFadeTransition,
    VMenuTransition: VMenuTransition,
    VScaleTransition: VScaleTransition,
    VScrollXTransition: VScrollXTransition,
    VScrollXReverseTransition: VScrollXReverseTransition,
    VScrollYTransition: VScrollYTransition,
    VScrollYReverseTransition: VScrollYReverseTransition,
    VSlideXTransition: VSlideXTransition,
    VSlideXReverseTransition: VSlideXReverseTransition,
    VSlideYTransition: VSlideYTransition,
    VSlideYReverseTransition: VSlideYReverseTransition,
    VTabReverseTransition: VTabReverseTransition,
    VTabTransition: VTabTransition,
    VExpandTransition: VExpandTransition,
    VExpandXTransition: VExpandXTransition,
    ZCarouselTransition: ZCarouselTransition,
    ZCarouselReverseTransition: ZCarouselReverseTransition,
    ZDialogTransition: ZDialogTransition,
    ZDialogBottomTransition: ZDialogBottomTransition,
    ZDialogTopTransition: ZDialogTopTransition,
    ZFabTransition: ZFabTransition,
    ZFadeTransition: ZFadeTransition,
    ZMenuTransition: ZMenuTransition,
    ZScaleTransition: ZScaleTransition,
    ZScrollXTransition: ZScrollXTransition,
    ZScrollXReverseTransition: ZScrollXReverseTransition,
    ZScrollYTransition: ZScrollYTransition,
    ZScrollYReverseTransition: ZScrollYReverseTransition,
    ZSlideXTransition: ZSlideXTransition,
    ZSlideXReverseTransition: ZSlideXReverseTransition,
    ZSlideYTransition: ZSlideYTransition,
    ZSlideYReverseTransition: ZSlideYReverseTransition,
    ZTabReverseTransition: ZTabReverseTransition,
    ZTabTransition: ZTabTransition,
    ZExpandTransition: ZExpandTransition,
    ZExpandXTransition: ZExpandXTransition
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map