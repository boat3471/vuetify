import Vue from 'vue';
export default function generateZSizeable(classs) {
  return Vue.extend({
    name: 'sizeable',
    props: {
      xs: Boolean,
      s: Boolean,
      m: Boolean,
      l: Boolean,
      xl: Boolean
    },
    computed: {
      sizeableClasses() {
        // 组件行内设置优先
        let xs = this.xs;
        let s = this.s;
        let m = this.m;
        let l = this.l;
        let xl = this.xl; // 读取全局设置

        if (!(xs || s || m || l || xl)) {
          const {
            defaultSize
          } = this.$ui || {};
          const size = defaultSize || 'm';
          xs = size === 'xs';
          s = size === 's';
          m = size === 'm';
          l = size === 'l';
          xl = size === 'xl';
        }

        const result = {};
        classs.forEach(c => {
          if (/--x-small$/.test(c)) {
            result[c] = xs;
          } else if (/--small$/.test(c)) {
            result[c] = s;
          } else if (/--default$/.test(c)) {
            result[c] = m;
          } else if (/--large$/.test(c)) {
            result[c] = l;
          } else if (/--x-large$/.test(c)) {
            result[c] = xl;
          }
        });
        return result;
      }

    }
  });
}
//# sourceMappingURL=generateZSizeable.js.map