import mixins from '../../../util/mixins';
import { ZColorSelectorMixin } from '../../mixins/ZColorSelectorMixin';
import { ZColorSelector, ZMenu, ZCard } from '../../../components';
export default mixins(ZColorSelectorMixin).extend({
  name: 'z-color-selector-rect',
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
    contentClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      colorData: {},
      colorHex: ''
    };
  },

  computed: {
    w() {
      const w = this.width;
      return isNaN(w) ? w : `${w}px`;
    },

    h() {
      const h = this.height;
      return isNaN(h) ? h : `${h}px`;
    }

  },
  watch: {
    value: {
      immediate: true,

      handler(value) {
        const info = this.getColorByName(value);
        this.colorHex = info.color;
      }

    }
  },
  methods: {
    onColorReady(info) {
      this.colorHex = info.color || '';
    },

    onColorChange(info) {
      this.colorHex = info.color;
      this.$emit('change', info);
    },

    genColorSelector() {
      const data = {
        props: {
          value: this.colorHex,
          defaultValue: this.colorHex
        },
        on: {
          ready: this.onColorReady,
          change: this.onColorChange
        }
      };
      const colorSelector = this.$createElement(ZColorSelector, data, []);
      return this.$createElement(ZCard, {
        props: {
          flat: true
        }
      }, [colorSelector]);
    },

    genActivatorSlot(props) {
      const data = {
        props: {
          outlined: true,
          flat: true,
          class: this.contentClass
        },
        style: {
          display: 'inline-block',
          cursor: 'pointer',
          width: this.w,
          height: this.h,
          backgroundColor: this.colorHex
        },
        ...props
      };
      return this.$createElement(ZCard, data, []);
    }

  },

  render(h) {
    return h(ZMenu, {
      staticClass: 'z-color-selector-rect--card',
      class: {},
      props: {
        closeOnContentClick: false,
        eager: true,
        offsetY: true
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [this.genColorSelector()]);
  }

});
//# sourceMappingURL=ZColorSelectorRect.js.map