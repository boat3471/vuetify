"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorPickerCanvas = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VColorPickerCanvas = _interopRequireDefault(require("./VColorPickerCanvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZColorPickerCanvas = (0, _mixins.default)(_VColorPickerCanvas.default).extend({
  name: 'z-color-picker-canvas',
  methods: {
    emitColor: function emitColor(x, y) {
      _VColorPickerCanvas.default.options.methods.emitColor.call(this, x, y);
    },
    handleClick: function handleClick(e) {
      _VColorPickerCanvas.default.options.methods.handleClick.call(this, e);

      if (!this.mouseMove) {
        this.$emit('action:canvas', 'click');
        this.$emit('update:after', 'canvas');
      }
    },
    handleMouseDown: function handleMouseDown(e) {
      this.mouseMove = false;

      _VColorPickerCanvas.default.options.methods.handleMouseDown.call(this, e);
    },
    handleMouseMove: function handleMouseMove(e) {
      this.mouseMove = true;

      _VColorPickerCanvas.default.options.methods.handleMouseMove.call(this, e);
    },
    handleMouseUp: function handleMouseUp() {
      _VColorPickerCanvas.default.options.methods.handleMouseUp.call(this);

      if (this.mouseMove) {
        this.$emit('action:canvas', 'move');
        this.$emit('update:after', 'canvas');
      }
    }
  }
});
exports.ZColorPickerCanvas = ZColorPickerCanvas;
var _default = ZColorPickerCanvas;
exports.default = _default;
//# sourceMappingURL=ZColorPickerCanvas.js.map