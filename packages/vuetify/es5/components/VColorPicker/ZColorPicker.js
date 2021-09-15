"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorPicker = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VColorPicker = _interopRequireDefault(require("./VColorPicker"));

var _ZColorPickerCanvas = _interopRequireDefault(require("./ZColorPickerCanvas"));

var _ZColorPickerPreview = _interopRequireDefault(require("./ZColorPickerPreview"));

var _ZColorPickerEdit = _interopRequireDefault(require("./ZColorPickerEdit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 扩展颜色选择器组件
 * 1. 增加 update:after 事件，减少颜色更新频率，在鼠标按下并移动时改变颜色只会在结束时触发
 * 2. 增加 action:canvas 事件，操作调色板时触发，点击调色板或者在调色板上滑动
 * 3. 增加 action:dot 事件，点击选中颜色圆点是触发
 * 3. 增加 action:slider 事件，操作滑动条时触发，点击滑动条或拖动滑动条
 * 4. 增加 action:input 事件，操作输入框时触发
 */
var ZColorPicker = (0, _mixins.default)(_VColorPicker.default).extend({
  name: 'z-color-picker',
  methods: {
    genCanvas: function genCanvas() {
      var that = this;
      return this.$createElement(_ZColorPickerCanvas.default, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          dotSize: that.dotSize,
          width: that.width,
          height: that.canvasHeight
        },
        on: {
          'update:color': that.updateColor,
          'update:after': that.updateAfter,
          'action:canvas': that.actionCanvas
        }
      });
    },
    genPreview: function genPreview() {
      var that = this;
      return this.$createElement(_ZColorPickerPreview.default, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          hideAlpha: that.hideAlpha
        },
        on: {
          'update:color': that.updateColor,
          'update:after': that.updateAfter,
          'action:dot': that.actionDot,
          'action:slider': that.actionSlider
        }
      });
    },
    genEdit: function genEdit() {
      var _this = this;

      var that = this;
      return this.$createElement(_ZColorPickerEdit.default, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          hideAlpha: that.hideAlpha,
          hideModeSwitch: that.hideModeSwitch,
          mode: that.mode
        },
        on: {
          'update:color': that.updateColor,
          'update:mode': function updateMode(v) {
            return _this.$emit('update:mode', v);
          },
          'update:after': that.updateAfter,
          'action:input': that.actionInput
        }
      });
    },
    updateAfter: function updateAfter(type) {
      this.$emit('update:after', type);
    },
    actionCanvas: function actionCanvas(type) {
      this.$emit('action:canvas', type);
    },
    actionDot: function actionDot() {
      this.$emit('action:dot');
    },
    actionSlider: function actionSlider(type) {
      this.$emit('action:slider', type);
    },
    actionInput: function actionInput(type) {
      this.$emit('action:input', type);
    }
  }
});
exports.ZColorPicker = ZColorPicker;
var _default = ZColorPicker;
exports.default = _default;
//# sourceMappingURL=ZColorPicker.js.map