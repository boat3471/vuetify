"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorSelectorMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 最大历史个数
 * @type {number}
 */
var maxHistoryLength = 9;
/**
 * 历史颜色
 * @type {string[]}
 */

var historyColors = [];
/**
 * 主题色选项列表
 */

var themeColorOptions = [{
  label: '主要色',
  name: 'primary'
}, {
  label: '次要色',
  name: 'secondary'
}, {
  label: '成功色',
  name: 'success'
}, {
  label: '错误色',
  name: 'error'
}, {
  label: '警告色',
  name: 'warning'
}];

var ZColorSelectorMixin = _vue.default.extend({
  props: {
    defaultValue: {
      type: String,
      default: '#FFFFFF'
    }
  },
  methods: {
    /**
     * 获取历史颜色列表
     * @return {string[]}
     */
    getHistoryColors: function getHistoryColors() {
      return historyColors;
    },

    /**
     * 获取所有主题色选项列表
     * @return {[]}
     */
    getThemeColorOptions: function getThemeColorOptions() {
      return themeColorOptions;
    },

    /**
     * 获取Vuetify主题色
     * @param name
     */
    getVuetifyThemeColor: function getVuetifyThemeColor(name) {
      var _this$$vuetify$theme = this.$vuetify.theme,
          dark = _this$$vuetify$theme.dark,
          themes = _this$$vuetify$theme.themes;

      if (dark) {
        return themes.dark[name];
      }

      return themes.light[name];
    },

    /**
     * 根据名称获取主题选项
     * @param name
     * @return {{}}
     */
    findThemeByName: function findThemeByName(name) {
      var theme = themeColorOptions.find(function (i) {
        return i.name === name || i.color === name;
      });

      if (theme) {
        if (!theme.color) {
          theme.color = this.getVuetifyThemeColor(theme.name);
        }

        return theme;
      }

      return null;
    },

    /**
     * 根据名称获取颜色信息
     * @param value 色值
     */
    getColorByName: function getColorByName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      value = value.trim();
      var data = {
        name: '',
        color: this.defaultValue
      };

      if (value) {
        var theme = this.findThemeByName(value);

        if (theme) {
          data.name = theme.name;
          data.color = theme.color || '';
        } else {
          var info = this.getColorInfo(value);

          if (info.valid) {
            data.name = value;
            data.color = info.hex || '';
          }
        }
      }

      return data;
    },

    /**
     * 添加历史色
     */
    addHistoryColor: function addHistoryColor(color) {
      var foundIndex = historyColors.indexOf(color);

      if (foundIndex !== -1) {
        return;
      }

      if (historyColors.length >= maxHistoryLength) {
        historyColors.shift();
      }

      historyColors.push(color);
    },

    /**
     * 获取颜色信息
     */
    getColorInfo: function getColorInfo(strColor) {
      strColor = (strColor || '').trim();
      var option = new Option();
      var style = option.style;
      style.display = 'none';
      style.color = strColor;
      var valid = !!style.color;

      if (valid) {
        document.body.append(option);
        var color = getComputedStyle(option).color;
        option.remove();
        var rgb = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
        var r = parseInt(rgb[0]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2]); // eslint-disable-next-line no-bitwise

        var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return {
          valid: valid,
          value: strColor,
          rgb: color,
          hex: hex.toLocaleUpperCase()
        };
      }

      return {
        valid: false
      };
    }
  }
});

exports.ZColorSelectorMixin = ZColorSelectorMixin;
var tempColorInfo = {
  name: '',
  color: ''
};
ZColorSelectorMixin.prototype.tempColorInfo = tempColorInfo;
var _default = ZColorSelectorMixin;
exports.default = _default;
//# sourceMappingURL=ZColorSelectorMixin.js.map