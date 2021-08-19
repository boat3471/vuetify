"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorPickerPreview = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VColorPickerPreview = _interopRequireDefault(require("./VColorPickerPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZColorPickerPreview = (0, _mixins.default)(_VColorPickerPreview.default).extend({
  name: 'z-color-picker-preview',
  methods: {
    genDot: function genDot() {
      var _this = this;

      var dot = _VColorPickerPreview.default.options.methods.genDot.call(this);

      if (dot.data) {
        dot.data.on = {
          click: function click() {
            _this.$emit('action:dot');
          }
        };
      }

      return dot;
    },
    genTrack: function genTrack(options) {
      var _this2 = this;

      if (options.on) {
        options.on.click = function () {
          if (!_this2.sliderMoved) {
            _this2.$emit('action:slider', 'click');

            _this2.$emit('update:after', 'slider');
          }

          _this2.sliderMoved = false;
        };

        options.on.end = function () {
          _this2.sliderMoved = true;

          _this2.$emit('action:slider', 'move');

          _this2.$emit('update:after', 'slider');
        };
      }

      return _VColorPickerPreview.default.options.methods.genTrack.call(this, options);
    }
  }
});
exports.ZColorPickerPreview = ZColorPickerPreview;
var _default = ZColorPickerPreview;
exports.default = _default;
//# sourceMappingURL=ZColorPickerPreview.js.map