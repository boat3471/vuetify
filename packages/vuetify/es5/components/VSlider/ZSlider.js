"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSlider = void 0;

var _VSlider = _interopRequireDefault(require("./VSlider"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _helpers = require("./../../util/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSlider = (0, _mixins.default)(_VSlider.default).extend({
  name: 'z-slider',
  props: {
    trackHeight: {
      type: [String, Number],
      default: '2px'
    },
    trackRadius: {
      type: [String, Number],
      default: 0
    },
    trackPointerEvents: {
      type: String,
      default: 'auto'
    }
  },
  methods: {
    genThumb: function genThumb() {
      var thumbSlots = (0, _helpers.getSlot)(this, 'thumb');

      if (thumbSlots) {
        return thumbSlots;
      }

      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },
    genTrackContainer: function genTrackContainer() {
      var children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      var h = isNaN(Number(this.trackHeight)) ? this.trackHeight : this.trackHeight + 'px';
      var r = isNaN(Number(this.trackRadius)) ? this.trackRadius : this.trackRadius + 'px';
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        style: {
          height: h,
          borderRadius: r,
          overflow: 'hidden',
          pointerEvents: this.trackPointerEvents
        },
        ref: 'track'
      }, children);
    }
  }
});
exports.ZSlider = ZSlider;
var _default = ZSlider;
exports.default = _default;
//# sourceMappingURL=ZSlider.js.map