// Styles
import "../../../src/components/VTimeline/VTimeline.sass";
import mixins from '../../util/mixins'; // Mixins

import Themeable from '../../mixins/themeable';
export default mixins(Themeable
/* @vue/component */
).extend({
  name: 'v-timeline',

  provide() {
    return {
      timeline: this
    };
  },

  props: {
    alignTop: Boolean,
    dense: {
      type: [Boolean, String],
      default: false
    },
    reverse: Boolean
  },
  computed: {
    computedDense() {
      if (typeof this.dense === 'string') {
        return this.dense === 'true' || this.dense === '1';
      }

      return this.dense || this.$themeStore.denseMode || false;
    },

    classes() {
      return {
        'v-timeline--align-top': this.alignTop,
        'v-timeline--dense': this.computedDense,
        'v-timeline--reverse': this.reverse,
        ...this.themeClasses
      };
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-timeline',
      class: this.classes
    }, this.$slots.default);
  }

});
//# sourceMappingURL=VTimeline.js.map