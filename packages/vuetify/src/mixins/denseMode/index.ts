import Vue from 'vue'

export function calcDense (vm: any) {
  if (typeof vm.dense === 'string') {
    return vm.dense === 'true' || vm.dense === '1'
  }
  if (typeof vm.dense === 'boolean') {
    return vm.dense
  }
  return undefined
}

export default Vue.extend({
  name: 'dense-mode',
  props: {
    dense: { type: [Boolean, String], default: undefined },
  },

  computed: {
    computedDense (): boolean {
      if (typeof this.dense === 'string') {
        return this.dense === 'true' || this.dense === '1'
      }
      if (typeof this.dense === 'boolean') {
        return this.dense
      }
      return this.$themeStore.denseMode || false
    },
  },
})
