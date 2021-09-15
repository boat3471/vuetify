"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessageSingleBase = void 0;

var _mixins = _interopRequireDefault(require("../../../util/mixins"));

var _ZSnackbar = require("../../../components/VSnackbar/ZSnackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMessageSingleBase = (0, _mixins.default)(_ZSnackbar.ZSnackbar).extend({
  name: 'z-message-single-base',
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
    var list = this.getList();
    var wrapper = this.$refs.wrapper;

    if (wrapper) {
      wrapper.style.opacity = '1';
      list.push({
        id: that._uid,
        duration: duration <= 0 ? -1 : duration,
        vnode: that,
        el: wrapper,
        index: list.length
      });
    }
  },
  methods: {
    getList: function getList() {
      if (this.$message) {
        var getMessageList = this.$message.getMessageList;
        return getMessageList ? getMessageList() : [];
      }

      return [];
    },
    genWrapper: function genWrapper() {
      var list = this.getList();

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
      var list = this.getList();
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
      var list = this.getList();
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
    if (!this.isActive) {
      return createElement('');
    }

    return createElement('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }
});
exports.ZMessageSingleBase = ZMessageSingleBase;
var _default = ZMessageSingleBase;
exports.default = _default;
//# sourceMappingURL=ZMessageSingleBase.js.map