"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorPickerEdit = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VColorPickerEdit = _interopRequireDefault(require("./VColorPickerEdit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZColorPickerEdit = (0, _mixins.default)(_VColorPickerEdit.default).extend({
  name: 'z-color-picker-edit',
  methods: {
    genInput: function genInput(target, attrs, value, on) {
      if (on) {
        var that = this;
        var input = on.input;

        on.input = function (e) {
          input && input(e);
          clearTimeout(that.inputTimer);
          that.inputTimer = setTimeout(function () {
            that.updateInput(e);
          }, 100);
        };
      }

      return _VColorPickerEdit.default.options.methods.genInput.call(this, target, attrs, value, on);
    },
    updateInput: function updateInput(e) {
      var target = e.target;

      if (target) {
        // const last = target.dataset['last'];
        // target.dataset['last'] = target.value;
        var nextElement = target.nextElementSibling;
        var flag = nextElement ? nextElement.innerText : '';
        this.$emit('action:input', flag);
        this.$emit('update:after', 'input');
      }
    }
  }
});
exports.ZColorPickerEdit = ZColorPickerEdit;
var _default = ZColorPickerEdit;
exports.default = _default;
//# sourceMappingURL=ZColorPickerEdit.js.map