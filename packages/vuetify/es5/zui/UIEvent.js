"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIEvent = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UIEvent =
/*#__PURE__*/
function () {
  function UIEvent() {
    _classCallCheck(this, UIEvent);

    this.events = new _vue.default();
  }

  _createClass(UIEvent, [{
    key: "emit",
    value: function emit(event) {
      var _this$events;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$events = this.events).$emit.apply(_this$events, [event].concat(args));
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.events.$on(event, callback);
    }
  }, {
    key: "once",
    value: function once(event, callback) {
      this.events.$once(event, callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      this.events.$off(event, callback);
    }
  }]);

  return UIEvent;
}();

exports.UIEvent = UIEvent;
//# sourceMappingURL=UIEvent.js.map