"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZView500 = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ = require("./assets/500");

var _components = require("../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZView500 = _vue.default.extend({
  name: 'z-view-500',
  props: {},
  data: function data() {
    return {};
  },
  watch: {},
  methods: {
    goHome: function goHome() {
      this.$ui.openHome();
    },
    goBack: function goBack() {
      this.$router && this.$router.back();
    },
    gen: function gen() {
      return this.$createElement('div', {
        staticClass: 'd-flex flex-column justify-start'
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: _.SvgText
        }
      }), this.$createElement(_components.ZBtn, {
        props: {
          text: true,
          m: true
        },
        on: {
          click: this.goHome
        }
      }, ['Go Home']), this.$createElement(_components.ZBtn, {
        props: {
          text: true,
          m: true
        },
        on: {
          click: this.goBack
        }
      }, ['Go Back'])]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'z-view-500 d-flex justify-center align-center',
      style: {
        width: '100%',
        height: '100%'
      }
    }, [h('div', {
      domProps: {
        innerHTML: _.SvgFlag
      },
      style: {
        marginRight: '40px'
      }
    }), this.gen()]);
  }
});

exports.ZView500 = ZView500;
var _default = ZView500;
exports.default = _default;
//# sourceMappingURL=ZView500.js.map