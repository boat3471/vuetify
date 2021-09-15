"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZAuthClass = void 0;

var _UIEvent2 = require("./events/UIEvent");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var instance;

var ZAuthClass =
/*#__PURE__*/
function (_UIEvent) {
  _inherits(ZAuthClass, _UIEvent);

  function ZAuthClass() {
    var _this;

    _classCallCheck(this, ZAuthClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZAuthClass).call(this));

    if (!instance) {
      instance = _assertThisInitialized(_this);
    }

    return _possibleConstructorReturn(_this, instance);
  }

  _createClass(ZAuthClass, [{
    key: "login",
    value: function login(data) {
      var login = ZAuthClass.options.login;
      return login ? login(data) : new Promise(function (resolve) {
        return resolve();
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      var logout = ZAuthClass.options.logout;
      return logout ? logout() : new Promise(function (resolve) {
        return resolve();
      });
    }
  }, {
    key: "verifyLogin",
    value: function verifyLogin(data) {
      var verifyLogin = ZAuthClass.options.verifyLogin;
      return verifyLogin ? verifyLogin(data) : true;
    }
  }, {
    key: "verifyLoginStatus",
    value: function verifyLoginStatus() {
      var verifyLoginStatus = ZAuthClass.options.verifyLoginStatus;
      return verifyLoginStatus ? verifyLoginStatus() : true;
    }
  }, {
    key: "verifyPermission",
    value: function verifyPermission(key) {
      var verifyPermission = ZAuthClass.options.verifyPermission;
      return verifyPermission ? verifyPermission(key) : true;
    }
  }, {
    key: "setting",
    value: function setting(options) {
      ZAuthClass.options = options;
    }
  }], [{
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZAuthClass();
      }

      return instance;
    }
  }]);

  return ZAuthClass;
}(_UIEvent2.UIEvent);

exports.ZAuthClass = ZAuthClass;
//# sourceMappingURL=ZAuth.js.map