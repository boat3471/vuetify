"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZView403 = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ = require("./assets/403");

var _components = require("../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZView403 = _vue.default.extend({
  name: 'z-view-403',
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
      staticClass: 'z-view-403 d-flex justify-center align-center',
      style: {
        width: '100%',
        height: '100%'
      }
    }, [h('div', {
      domProps: {
        innerHTML: _.SvgFlag
      },
      style: {
        marginTop: '-105px'
      }
    }), this.gen()]);
  }
});

exports.ZView403 = ZView403;
var _default = ZView403;
exports.default = _default;
//# sourceMappingURL=ZView403.js.map