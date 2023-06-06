"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultThemeIcon = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDefaultThemeIcon = _vue.default.extend({
  name: 'z-default-theme-icon',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    themeIcon: function themeIcon() {
      return this.$themeStore.darkStatus ? 'mdi-brightness-4' : 'mdi-brightness-7';
    }
  },
  methods: {
    onThemeClick: function onThemeClick() {
      this.$emit('click:theme');
    }
  },
  render: function render(h) {
    var _this = this;

    return h(_components.ZIcon, {
      props: {
        color: this.color,
        size: 18
      },
      on: {
        click: function click() {
          _this.onThemeClick();
        }
      }
    }, [this.themeIcon]);
  }
});

exports.ZDefaultThemeIcon = ZDefaultThemeIcon;
var _default = ZDefaultThemeIcon;
exports.default = _default;
//# sourceMappingURL=ZDefaultThemeIcon.js.map