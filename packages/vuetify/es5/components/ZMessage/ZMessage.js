"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessage = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _ZSnackbar = require("../VSnackbar/ZSnackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMessage = (0, _mixins.default)(_ZSnackbar.ZSnackbar).extend({
  name: 'z-message',
  props: {
    offsetTop: {
      type: Number,
      default: 8
    },
    itemGap: {
      type: Number,
      default: 8
    },
    itemHeight: {
      type: Number,
      default: 42
    },
    top: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    var duration = this.$props.duration;
    var that = this;
    var list = this.getMessageList();
    var wrapper = this.$refs.wrapper;
    wrapper.style.opacity = '1';
    list.push({
      id: that._uid,
      duration: duration <= 0 ? -1 : duration,
      vnode: that,
      el: wrapper,
      index: list.length
    });
  },
  methods: {
    genWrapper: function genWrapper() {
      var list = this.getMessageList();

      var wrapper = _ZSnackbar.ZSnackbar.options.methods.genWrapper.call(this);

      var currentTop = this.offsetTop + list.length * (this.itemGap + this.itemHeight);
      wrapper.data.style = {
        top: "".concat(currentTop, "px")
      };
      wrapper.data.ref = 'wrapper';
      return wrapper;
    },
    setTimeout: function setTimeout() {
      var _this = this;

      var that = this;
      window.clearTimeout(that.activeTimeout);
      var timeout = Number(that.timeout);

      if (!that.isActive) {
        this.resetLocation();
      }

      if (!that.isActive || [0, -1].includes(timeout)) {
        return;
      }

      that.activeTimeout = window.setTimeout(function () {
        _this.resetLocation();
      }, timeout);
    },
    resetLocation: function resetLocation() {
      var that = this;
      var list = this.getMessageList();
      var item = list.find(function (i) {
        return i.id === that._uid;
      });

      if (item) {
        // 从池子中删除当前弹窗
        list.splice(item.index, 1); // 设置当前通知透明度为0;

        item.el.style.opacity = '0'; // 设置当前通知位置，移出界面;

        item.el.style.top = "".concat(this.offsetTop + (item.index - 1) * (this.itemGap + this.itemHeight), "px"); // 重置所有通知位置及其索引

        this.resetAll(item.index);
      } // 等待动画结束后移除


      setTimeout(function () {
        that.isActive = false;
      }, 400);
    },
    resetAll: function resetAll() {
      var _this2 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var list = this.getMessageList();
      list.forEach(function (item, i) {
        if (i >= index) {
          var top = _this2.offsetTop + i * (_this2.itemGap + _this2.itemHeight);
          item.el.style.top = "".concat(top, "px");
        }

        item.index = i;
      });
    }
  },
  render: function render(createElement) {
    var that = this;

    if (!that.isActive) {
      return createElement('');
    }

    return createElement('div', {
      staticClass: 'v-snack',
      class: that.classes,
      style: that.styles
    }, [that.transition !== false ? that.genTransition() : that.genWrapper()]);
  }
});
exports.ZMessage = ZMessage;
var _default = ZMessage;
exports.default = _default;
//# sourceMappingURL=ZMessage.js.map