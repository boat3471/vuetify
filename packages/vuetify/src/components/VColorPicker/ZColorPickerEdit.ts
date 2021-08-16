import { VNode } from 'vue'
import mixins from '../../util/mixins'
import VColorPickerEdit from './VColorPickerEdit'

export const ZColorPickerEdit = mixins(VColorPickerEdit).extend({
  name: 'z-color-picker-edit',
  methods: {
    genInput (target: string, attrs: any, value: any, on: any): VNode {
      if (on) {
        const that = this as any
        const input = on.input as Function
        on.input = (e: Event) => {
          input && input(e)
          clearTimeout(that.inputTimer)
          that.inputTimer = setTimeout(() => {
            that.updateInput(e)
          }, 100)
        }
      }
      return VColorPickerEdit.options.methods.genInput.call(this, target, attrs, value, on)
    },
    updateInput (e: Event) {
      const target = e.target as HTMLInputElement
      if (target) {
        // const last = target.dataset['last'];
        // target.dataset['last'] = target.value;
        const nextElement = target.nextElementSibling as HTMLSpanElement
        const flag = nextElement ? nextElement.innerText : ''
        this.$emit('action:input', flag)
        this.$emit('update:after', 'input')
      }
    },
  },
})

export default ZColorPickerEdit
