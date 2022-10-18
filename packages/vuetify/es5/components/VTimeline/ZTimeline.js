"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTimelineItem = exports.ZTimeline = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZTimeline = (0, _mixins.default)(_index.VTimeline).extend({
  name: 'z-timeline',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZTimeline = ZTimeline;
var ZTimelineItem = (0, _mixins.default)(_index.VTimelineItem).extend({
  name: 'z-timeline-item'
});
exports.ZTimelineItem = ZTimelineItem;
var _default2 = {
  $_vuetify_subcomponents: {
    ZTimeline: ZTimeline,
    ZTimelineItem: ZTimelineItem
  }
};
exports.default = _default2;
//# sourceMappingURL=ZTimeline.js.map