"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Zui = void 0;

var components = _interopRequireWildcard(require("./components"));

var directives = _interopRequireWildcard(require("./directives"));

var _install = require("./install");

var services = _interopRequireWildcard(require("./services"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Zui =
/*#__PURE__*/
function () {
  function Zui() {
    var userPreset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Zui);

    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(services.Presets);
    this.use(services.Application);
    this.use(services.Breakpoint);
    this.use(services.Goto);
    this.use(services.Icons);
    this.use(services.Lang);
    this.use(services.Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  _createClass(Zui, [{
    key: "init",
    value: function init(root, ssrContext) {
      var _this = this;

      this.installed.forEach(function (property) {
        var service = _this.framework[property];
        service.framework = _this.framework;
        service.init(root, ssrContext);
      }); // rtl is not installed and
      // will never be called by
      // the init process

      this.framework.rtl = Boolean(this.preset.rtl);
    } // Instantiate a VuetifyService

  }, {
    key: "use",
    value: function use(Service) {
      var property = Service.property;
      if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

      this.framework[property] = new Service(this.preset, this);
      this.installed.push(property);
    }
  }]);

  return Zui;
}();

exports.Zui = Zui;
Zui.installed = false;
Zui.version = "2.5.813";
Zui.config = {
  silent: false
};

Zui.install = function (IVue, options) {
  _install.install.call(Zui, IVue, _objectSpread({
    components: components,
    directives: directives
  }, options));
};

var _default = Zui;
exports.default = _default;
//# sourceMappingURL=framework.js.map