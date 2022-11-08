import mixins from '../../../util/mixins';
import { ZColorSelectorMixin } from '../../mixins/ZColorSelectorMixin';
import { ZColorPicker, ZCard } from '../../../components';
import "../../../../src/zui/components/ZColorSelector/ZColorPicker.scss";
export default mixins(ZColorSelectorMixin).extend({
  name: 'z-color-selector',
  props: {
    height: {
      type: [Number, String],
      default: 20
    },
    width: {
      type: [Number, String],
      default: 20
    },
    value: {
      type: String,
      default: ''
    },
    transparent: {
      type: Boolean,
      default: true
    },
    none: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      colorData: {},
      colorName: '',
      colorHex: '',
      initialName: '',
      initialColor: '',
      historyColors: this.getHistoryColors(),
      themeOptions: this.getThemeColorOptions(),
      lastInfo: {},
      firstUpdateColor: true
    };
  },

  computed: {},
  watch: {
    value: {
      immediate: true,

      handler(value) {
        const lastInfo = this.lastInfo;

        if (lastInfo && (value === lastInfo.name || value === lastInfo.color)) {
          return;
        }

        const info = this.getColorByName(value);
        this.colorData = info;
        this.colorName = info.name || '';
        this.colorHex = info.color;
        this.lastInfo = info;

        if (!this.initialColor) {
          this.initialName = info.name;
          this.initialColor = info.color;
        }
      }

    }
  },

  mounted() {
    this.$emit('ready', {
      name: this.colorName,
      color: this.colorHex
    });
  },

  methods: {
    onUpdateColor(value) {
      if (this.firstUpdateColor) {
        this.firstUpdateColor = false;

        if (this.value === 'none' || this.value === '' || this.value === 'transparent') {
          return;
        }
      }

      this.colorData = value;
      this.colorHex = value.hex;
      this.colorName = value.hex;
    },

    onUpdateAfter() {
      this.emitColorChange();
    },

    /** 点击圆盘记录历史颜色 */
    onActionDot() {
      this.addHistoryColor(this.colorHex);
    },

    /** 提交颜色 */
    emitColorChange() {
      const {
        colorName,
        colorHex
      } = this;

      if (colorHex) {
        this.$emit('change', {
          name: colorName || colorHex,
          color: colorName === 'none' ? '' : colorHex,
          isTheme: false
        });
      }
    },

    /** 点击颜色 */
    onClickColor(type, colorName, colorValue) {
      switch (type) {
        case 'history':
          // 点击历史颜色时
          this.colorName = colorValue || '';
          this.colorHex = colorValue || '';
          this.emitColorChange();
          break;

        case 'theme':
          // 点击主题颜色时
          if (!colorValue) {
            colorValue = this.getVuetifyThemeColor(colorName);
          }

          this.colorName = colorName;
          this.colorHex = colorValue || '';
          this.$emit('change', {
            name: colorName,
            color: colorValue,
            isTheme: true
          });
          break;

        case 'initial':
          // 点击初始颜色
          this.colorName = colorName;
          this.colorHex = colorValue || '';
          this.emitColorChange();
          break;
      }
    },

    genColorPicker() {
      const data = {
        props: {
          value: this.colorHex,
          // dotSize: '10',
          hideModeSwitch: true,
          mode: 'hexa'
        },
        on: {
          'update:color': this.onUpdateColor,
          'update:after': this.onUpdateAfter,
          'action:dot': this.onActionDot
        }
      };
      return this.$createElement(ZColorPicker, data, ['genThemeColorContent']);
    },

    genColorCard(colorName, title, type, colorValue) {
      const style = {};
      const classes = ['mr-1'];

      if (type === 'theme') {
        classes.push(colorName);
      } else {
        style.backgroundColor = colorName;
      }

      if (colorName === 'transparent') {
        classes.push('color--item-transparent');
      } else {
        classes.push('color--item');
      }

      const children = [];

      if (colorName === 'none') {
        children.push(this.$createElement('z-icon', 'mdi-cancel'));
      }

      const data = {
        staticClass: classes.join(' '),
        props: {
          flat: true,
          outlined: true,
          title
        },
        style,
        on: {
          click: () => {
            switch (type) {
              case 'history':
                this.onClickColor(type, colorName, colorName);
                break;

              case 'theme':
                this.onClickColor(type, colorName, colorValue);
                break;

              case 'initial':
                break;
            }
          }
        }
      };
      return this.$createElement(ZCard, data, children);
    },

    genThemeColorContent() {
      const data = {
        staticClass: 'theme-colors pb-2 px-3'
      };
      return this.$createElement('div', data, [this.none ? this.genColorCard('none', '无', 'history') : null, this.transparent ? this.genColorCard('transparent', '透明', 'history', '#00000000') : null, this.genColorCard('#FFFFFF', '白色', 'history'), this.genColorCard('#000000', '黑色', 'history'), this.$createElement('z-divider', {
        staticClass: 'ml-1 mr-2',
        props: {
          vertical: true
        }
      }), this.themeOptions.map(i => this.genColorCard(i.name, i.label, 'theme', i.color))]);
    },

    genHistoryColorContent() {
      const data = {
        staticClass: 'history-colors pb-4 px-3'
      };
      return this.$createElement('div', data, [this.genColorCard('#FFFFFF', '白色', 'history'), this.historyColors.map(i => {
        return this.genColorCard(i, i, 'history');
      })]);
    }

  },

  render(h) {
    return h(ZCard, {
      staticClass: 'z-color-selector-card',
      class: {},
      props: {}
    }, [this.genColorPicker(), this.genThemeColorContent(), this.genHistoryColorContent()]);
  }

});
//# sourceMappingURL=ZColorSelector.js.map