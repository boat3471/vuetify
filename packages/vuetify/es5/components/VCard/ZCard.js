"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCardTitle = exports.ZCardText = exports.ZCardSubtitle = exports.ZCardActions = exports.ZCard = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCard = (0, _mixins.default)(_index.VCard).extend({
  name: 'z-card'
});
exports.ZCard = ZCard;
var ZCardActions = (0, _mixins.default)(_index.VCardActions).extend({
  name: 'z-card-actions'
});
exports.ZCardActions = ZCardActions;
var ZCardSubtitle = (0, _mixins.default)(_index.VCardSubtitle).extend({
  name: 'z-card-subtitle'
});
exports.ZCardSubtitle = ZCardSubtitle;
var ZCardText = (0, _mixins.default)(_index.VCardText).extend({
  name: 'z-card-text'
});
exports.ZCardText = ZCardText;
var ZCardTitle = (0, _mixins.default)(_index.VCardTitle).extend({
  name: 'z-card-title'
});
exports.ZCardTitle = ZCardTitle;
var _default = {
  $_vuetify_subcomponents: {
    ZCard: ZCard,
    ZCardActions: ZCardActions,
    ZCardSubtitle: ZCardSubtitle,
    ZCardText: ZCardText,
    ZCardTitle: ZCardTitle
  }
};
exports.default = _default;
//# sourceMappingURL=ZCard.js.map