"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZIconLoader = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ZIconLoader =
/*#__PURE__*/
function () {
  function ZIconLoader() {
    _classCallCheck(this, ZIconLoader);

    this.defaultIcon = '';
    this.defaultOpacity = 1;
  }

  _createClass(ZIconLoader, [{
    key: "isLoad",
    value: function isLoad(iconName) {
      return false;
    }
  }, {
    key: "load",
    value: function load(vm, iconName) {
      return Promise.resolve();
    }
  }]);

  return ZIconLoader;
}();

exports.ZIconLoader = ZIconLoader;
//# sourceMappingURL=ZIconLoader.js.map