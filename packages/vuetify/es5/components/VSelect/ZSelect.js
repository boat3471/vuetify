"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ZSelect: true
};
exports.default = exports.ZSelect = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _console = require("../../util/console");

var _VSelect = _interopRequireWildcard(require("./VSelect"));

Object.keys(_VSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VSelect[key];
    }
  });
});

var _VSelectList = _interopRequireDefault(require("./VSelectList"));

var _generateZSizeable = _interopRequireDefault(require("../../zui/util/generateZSizeable"));

require("../../../src/components/VSelect/ZSelect/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sizeable = (0, _generateZSizeable.default)(['v-select-size--x-small', 'v-select-size--small', 'v-select-size--default', 'v-select-size--large', 'v-select-size--x-large']);
var ZSelectList = (0, _mixins.default)(_VSelectList.default).extend({
  name: 'z-select-list',
  props: {
    sizeableClasses: Object
  },
  computed: {
    themeClasses: function themeClasses() {
      // @ts-ignore
      var classes = _VSelect.default.options.computed.themeClasses.call(this);

      return _objectSpread({}, classes, {}, this.sizeableClasses);
    }
  }
});
var ZSelect = (0, _mixins.default)(_VSelect.default, Sizeable).extend({
  props: {
    async: {
      type: Function,
      default: null
    },
    asyncParams: {
      type: Object,
      default: null
    },
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes: function classes() {
      var sizeableClasses = this.sizeableClasses;
      return _objectSpread({}, _VSelect.default.options.computed.classes.call(this), {}, sizeableClasses);
    },
    listData: function listData() {
      var data = _VSelect.default.options.computed.listData.call(this); // @ts-ignore


      data.props.sizeableClasses = this.sizeableClasses;
      return data;
    },
    staticList: function staticList() {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        (0, _console.consoleError)('assert: staticList should not be called if slots are used');
      }

      return this.$createElement(ZSelectList, this.listData);
    },
    $_menuProps: function $_menuProps() {
      var data = _VSelect.default.options.computed.$_menuProps.call(this); // @ts-ignore


      data.offsetY = true;
      return data;
    }
  },
  watch: {
    async: function async(val) {
      if (val) {
        this.loading = true;
      }
    },
    asyncParams: function asyncParams(val) {
      this.asyncRequest(val);
    }
  },
  created: function created() {
    var asyncParams = this.$props.asyncParams;
    this.asyncRequest(asyncParams);
  },
  methods: {
    genProgress: function genProgress() {// VSelect.options.methods.genProgress.call(this);
    },
    asyncRequest: function asyncRequest(params) {
      var async = this.$props.async;

      if (async) {
        async.call(this, params);
      }
    },
    onMouseUp: function onMouseUp(e) {
      _VSelect.default.options.methods.onMouseUp.call(this, e);
    },
    genListWithSlot: function genListWithSlot() {
      var _this = this;

      var slots = ['prepend-item', 'no-data', 'append-item'].filter(function (slotName) {
        return _this.$slots[slotName];
      }).map(function (slotName) {
        return _this.$createElement('template', {
          slot: slotName
        }, _this.$slots[slotName]);
      });
      return this.$createElement(_VSelectList.default, _objectSpread({}, this.listData), slots);
    }
  }
}).extend({
  name: 'z-select'
});
exports.ZSelect = ZSelect;
var _default = ZSelect;
exports.default = _default;
//# sourceMappingURL=ZSelect.js.map