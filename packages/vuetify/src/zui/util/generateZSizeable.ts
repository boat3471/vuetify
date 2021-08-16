import Vue from 'vue'

export default function generateZSizeable (classs: string[]) {
  return Vue.extend({
    name: 'sizeable',
    props: {
      xs: Boolean,
      s: Boolean,
      m: Boolean,
      l: Boolean,
      xl: Boolean,
    },
    computed: {
      sizeableClasses () {
        // 组件行内设置优先
        let xs = this.xs
        let s = this.s
        let m = this.m
        let l = this.l
        let xl = this.xl

        // 读取全局设置
        if (!(xs || s || m || l || xl)) {
          const { defaultSize } = this.$ui || {}
          xs = defaultSize === 'xs'
          s = defaultSize === 's'
          m = defaultSize === 'm'
          l = defaultSize === 'l'
          xl = defaultSize === 'xl'
        }

        const result: any = {}
        classs.forEach(c => {
          if (/--x-small$/.test(c)) {
            result[c] = xs
          } else if (/--small$/.test(c)) {
            result[c] = s
          } else if (/--default$/.test(c)) {
            result[c] = m
          } else if (/--large$/.test(c)) {
            result[c] = l
          } else if (/--x-large$/.test(c)) {
            result[c] = xl
          }
        })

        return result
      },
    },
  })
}
