"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZModalSingle = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

require("../../../../src/zui/components/ZModal/ZModal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZModalSingle = _vue.default.extend({
  name: 'z-global-modal',
  props: {
    type: String,
    icon: String,
    title: String,
    message: String,
    html: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    labelCancel: {
      type: String,
      default: '取消'
    },
    labelSure: {
      type: String,
      default: '确定'
    },
    width: {
      type: Number,
      default: 450
    },
    top: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    var delay = this.$props.delay;
    var labelSure = "".concat(this.$props.labelSure).concat(delay > 0 ? '(' + delay + ')' : '');
    return {
      visible: true,
      labelSureDisplay: labelSure,
      delayCount: delay,
      delayTimer: 0
    };
  },
  computed: {
    color: function color() {
      if (this.type === 'info' || this.type === 'confirm') {
        return 'primary';
      }

      return this.type;
    },
    iconColor: function iconColor() {
      if (this.type === 'info') {
        return 'primary';
      }

      if (this.type === 'confirm') {
        return 'warning';
      }

      return this.type;
    },
    classes: function classes() {
      var list = ['z-modal'];

      switch (this.type) {
        case 'info':
          list.push('z-modal-info');
          break;

        case 'success':
          list.push('z-modal-success');
          break;

        case 'warning':
          list.push('z-modal-warning');
          break;

        case 'error':
          list.push('z-modal-error');
          break;

        default:
          break;
      }

      return list.join(' ');
    }
  },
  mounted: function mounted() {
    var _this = this;

    var labelSure = this.labelSure;
    var total = this.$props.delay;

    if (total > 0) {
      this.delayTimer = setInterval(function () {
        total--;
        _this.labelSureDisplay = "".concat(labelSure, "(").concat(total, ")");

        if (total === 0) {
          clearInterval(_this.delayTimer);
          _this.labelSureDisplay = labelSure;
          _this.delayCount = 0;
        }
      }, 1000);
    }
  },
  destroyed: function destroyed() {
    clearInterval(this.delayTimer);
  },
  methods: {
    sure: function sure() {
      var fn = this.sureBeforeFun;
      var fnResult = fn && fn();
      var isClose = fnResult !== false;

      if (isClose) {
        this.visible = false;
        clearInterval(this.delayTimer);
      }
    },
    cancel: function cancel() {
      var fn = this.cancelBeforeFun;
      var fnResult = fn && fn('cancel');
      var isClose = fnResult !== false;

      if (isClose) {
        this.visible = false;
        clearInterval(this.delayTimer);
      }
    },
    close: function close() {
      var fn = this.cancelBeforeFun;
      var fnResult = fn && fn('close');
      var isClose = fnResult !== false;

      if (isClose) {
        this.visible = false;
        clearInterval(this.delayTimer);
      }
    },

    /**
     * 强制关闭函数
     */
    closeForceFun: function closeForceFun() {
      this.visible = false;
      clearInterval(this.delayTimer);
    },

    /**
     * 设置点击确认前函数
     */
    setSureBeforeFun: function setSureBeforeFun(fn) {
      if (fn && typeof fn === 'function') {
        this.sureBeforeFun = fn;
      }
    },

    /**
     * 设置点击取消或关闭前
     */
    setCancelBeforeFun: function setCancelBeforeFun(fn) {
      if (fn && typeof fn === 'function') {
        this.cancelBeforeFun = fn;
      }
    },
    genBody: function genBody() {
      var titleName = this.$createElement(_components.ZCol, {}, [this.title]);
      var titleClose = this.$createElement(_components.ZCol, {
        props: {
          cols: 'auto'
        }
      }, [this.$createElement(_components.ZBtn, {
        props: {
          icon: true
        },
        on: {
          click: this.close
        }
      }, [this.$createElement(_components.ZIcon, {
        props: {
          small: true
        }
      }, ['mdi-close'])])]);
      var title = this.title ? this.$createElement(_components.ZCardTitle, {
        staticClass: 'px-3 py-1'
      }, [this.$createElement(_components.ZRow, {}, [titleName, this.showClose ? titleClose : ''])]) : null;
      var contentIcon = this.icon ? this.$createElement(_components.ZCol, {
        staticClass: 'd-flex justify-center align-center pr-2',
        props: {
          cols: 'auto'
        }
      }, [this.$createElement(_components.ZIcon, {
        props: {
          color: this.iconColor
        }
      }, [this.icon])]) : null; // eslint-disable-next-line sonarjs/no-all-duplicated-branches

      var contentText = this.html ? this.$createElement(_components.ZCol, {
        domProps: {
          innerHTML: this.message
        }
      }, []) : this.$createElement(_components.ZCol, {}, [this.message]);
      var content = this.$createElement(_components.ZCardText, {
        staticClass: 'pt-5'
      }, [this.$createElement(_components.ZRow, {
        props: {
          align: 'center',
          justify: 'center',
          noGutters: true
        }
      }, [contentIcon, contentText])]); // 取消按钮

      var cancelBtn = this.$createElement(_components.ZBtn, {
        props: {
          color: 'secondary',
          outlined: false,
          text: true,
          xs: true
        },
        on: {
          click: this.cancel
        }
      }, [this.labelCancel]); // 确认按钮

      var sureBtn = this.$createElement(_components.ZBtn, {
        props: {
          color: this.color,
          // elevation: 1,
          outlined: false,
          text: true,
          disabled: this.delayCount > 0,
          xs: true
        },
        on: {
          click: this.sure
        }
      }, [this.labelSureDisplay]);
      var actions = this.$createElement(_components.ZCardActions, {}, [this.$createElement(_components.ZSpacer), this.showCancel ? cancelBtn : null, sureBtn]);
      return this.$createElement(_components.ZCard, {}, [this.title ? title : null, this.title ? this.$createElement(_components.ZDivider) : null, content, this.$createElement(_components.ZDivider), actions]);
    },
    genDialog: function genDialog() {
      return this.visible ? this.$createElement(_components.ZDialog, {
        props: {
          value: this.visible,
          contentClass: this.classes,
          hideOverlay: false,
          overlayOpacity: 0.2,
          noClickAnimation: false,
          persistent: true,
          width: this.width,
          top: this.top
        }
      }, [this.genBody()]) : null;
    }
  },
  render: function render() {
    return this.genDialog();
  }
});

exports.ZModalSingle = ZModalSingle;
var _default = ZModalSingle;
exports.default = _default;
//# sourceMappingURL=ZModalSingle.js.map