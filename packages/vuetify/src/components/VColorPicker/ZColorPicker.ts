import { VNode } from 'vue'
import mixins from '../../util/mixins'
import VColorPicker from './VColorPicker'

import ZColorPickerCanvas from './ZColorPickerCanvas'
import ZColorPickerPreview from './ZColorPickerPreview'
import ZColorPickerEdit from './ZColorPickerEdit'

/**
 * 扩展颜色选择器组件
 * 1. 增加 update:after 事件，减少颜色更新频率，在鼠标按下并移动时改变颜色只会在结束时触发
 * 2. 增加 action:canvas 事件，操作调色板时触发，点击调色板或者在调色板上滑动
 * 3. 增加 action:dot 事件，点击选中颜色圆点是触发
 * 3. 增加 action:slider 事件，操作滑动条时触发，点击滑动条或拖动滑动条
 * 4. 增加 action:input 事件，操作输入框时触发
 */
export const ZColorPicker = mixins(VColorPicker).extend({
  name: 'z-color-picker',
  methods: {
    genCanvas (): VNode {
      const that: any = this as any
      return this.$createElement(ZColorPickerCanvas, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          dotSize: that.dotSize,
          width: that.width,
          height: that.canvasHeight,
        },
        on: {
          'update:color': that.updateColor,
          'update:after': that.updateAfter,
          'action:canvas': that.actionCanvas,
        },
      })
    },

    genPreview (): VNode {
      const that: any = this as any
      return this.$createElement(ZColorPickerPreview, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          hideAlpha: that.hideAlpha,
        },
        on: {
          'update:color': that.updateColor,
          'update:after': that.updateAfter,
          'action:dot': that.actionDot,
          'action:slider': that.actionSlider,
        },
      })
    },

    genEdit (): VNode {
      const that: any = this as any
      return this.$createElement(ZColorPickerEdit, {
        props: {
          color: that.internalValue,
          disabled: that.disabled,
          hideAlpha: that.hideAlpha,
          hideModeSwitch: that.hideModeSwitch,
          mode: that.mode,
        },
        on: {
          'update:color': that.updateColor,
          'update:mode': (v: any) => this.$emit('update:mode', v),
          'update:after': that.updateAfter,
          'action:input': that.actionInput,
        },
      })
    },

    updateAfter (type: string) {
      this.$emit('update:after', type)
    },

    actionCanvas (type: string) {
      this.$emit('action:canvas', type)
    },

    actionDot () {
      this.$emit('action:dot')
    },

    actionSlider (type: string) {
      this.$emit('action:slider', type)
    },

    actionInput (type: string) {
      this.$emit('action:input', type)
    },
  },
})

export default ZColorPicker
