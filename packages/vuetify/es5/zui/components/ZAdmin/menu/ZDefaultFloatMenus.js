"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultFloatMenus = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDefaultFloatMenus = _vue.default.extend({
  name: 'z-default-float-menus',
  props: {},
  data: function data() {
    return {
      visible: false,
      menu: {},
      left: '0',
      top: '0',
      child: {},
      childStyle: {},
      childVisible: false,
      closeTimer: 0
    };
  },
  watch: {},
  created: function created() {
    var _this = this;

    this.$ui.on('innerCloseFloatMenu', function () {
      _this.forceClose();
    });
    this.$ui.on('showFloatMenu', function (item) {
      clearTimeout(_this.closeTimer);
      _this.menu = item.menu;
      _this.left = item.left + 3 + 'px';
      _this.top = item.top + (_this.$props.dense ? 48 : 64) + 'px';
      _this.visible = true;
    });
    this.$ui.on('hideFloatMenu', function (menu) {
      _this.leave();
    });
  },
  mounted: function mounted() {},
  methods: {
    enter: function enter() {
      this.visible = true;
      clearTimeout(this.closeTimer);
    },
    leave: function leave() {
      var _this2 = this;

      this.closeTimer = setTimeout(function () {
        _this2.visible = false;
        _this2.childVisible = false;
      }, 300);
    },
    enterChildMenu: function enterChildMenu(event, child) {
      if (child && child.children && child.children.length > 0) {
        clearTimeout(this.closeTimer);
        this.childStyle = {
          left: event.target.offsetLeft + event.target.offsetWidth + 3 + 'px',
          top: event.target.offsetTop + 'px'
        };
        this.childVisible = true;
        this.child = child;
      }
    },
    leaveChildMenu: function leaveChildMenu() {
      var _this3 = this;

      this.closeTimer = setTimeout(function () {
        _this3.childVisible = false;
      }, 300);
    },
    enterChildPanel: function enterChildPanel() {
      clearTimeout(this.closeTimer);
    },
    forceClose: function forceClose() {
      this.visible = false;
      this.childVisible = false;
    },
    forceCloseChild: function forceCloseChild() {
      this.childVisible = false;
    },
    to: function to(item) {
      this.forceClose();

      if (item.children && item.children.length > 0) {
        return;
      }

      if (item.href) {
        window.open(item.href, item.target || '_blank');
        return;
      }

      if (this.$route.path !== item.path) {
        this.$router.push({
          path: item.path,
          query: item.query
        });
      }
    }
  },
  render: function render(h) {
    return h(_components.ZCard, {
      props: {
        flat: true,
        outlined: true,
        minWidth: 200,
        minHeight: 40
      },
      style: {// position: 'fixed',
        // left: this.left,
        // top: this.top,
        // zIndex: 2,
      },
      on: {// mouseenter: this.enter,
        // mouseleave: this.leave,
      }
    }, ['asdasd']);
  }
});

exports.ZDefaultFloatMenus = ZDefaultFloatMenus;
var _default = ZDefaultFloatMenus;
exports.default = _default;
//# sourceMappingURL=ZDefaultFloatMenus.js.map