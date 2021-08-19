"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTooltip = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _VTooltip = _interopRequireDefault(require("./VTooltip"));

require("../../../src/zui/styles/ZTooltip/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZTooltip = (0, _mixins.default)(_VTooltip.default).extend({
  name: 'z-tooltip',
  computed: {
    styles: function styles() {
      var styles = _VTooltip.default.options.computed.styles.call(this); // @ts-ignore


      styles.opacity = this.isActive ? 1 : 0;
      return styles;
    }
  },
  methods: {
    setBackgroundColor: function setBackgroundColor(color) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaultTooltipColor = this.$ui.defaultTooltipColor;
      color = color || defaultTooltipColor; // @ts-ignore

      return _VTooltip.default.options.methods.setBackgroundColor.call(this, color, data);
    },
    genContent: function genContent() {
      var content = _VTooltip.default.options.methods.genContent.call(this); // @ts-ignore


      var classes = content.data.class;
      var children = this.$children;
      var xs = false;
      var s = false;
      var m = false;
      var l = false;
      var xl = false;
      children.forEach(function (i) {
        xs = i.xs;
        s = i.s;
        m = i.m;
        l = i.l;
        xl = i.xl;
      });
      Object.assign(classes, {
        'v-tooltip-size--x-small': xs,
        'v-tooltip-size--small': s,
        'v-tooltip-size--default': m,
        'v-tooltip-size--large': l,
        'v-tooltip-size--x-large': xl
      });
      return content;
    }
  },
  render: function render(createElement) {
    var that = this;
    return createElement(that.tag, {
      staticClass: 'v-tooltip',
      class: that.classes
    }, [that.showLazyContent(function () {
      return [that.genTransition()];
    }), that.genActivator()]);
  }
});
exports.ZTooltip = ZTooltip;
var _default = ZTooltip;
exports.default = _default;
//# sourceMappingURL=ZTooltip.js.map