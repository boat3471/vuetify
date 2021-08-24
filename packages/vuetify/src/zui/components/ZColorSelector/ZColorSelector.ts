import { VNode, VNodeData } from 'vue'
import mixins from '../../../util/mixins'
import { ZColorSelectorMixin, ColorInfo } from '../../mixins/ZColorSelectorMixin'
import { ZColorPicker, ZCard } from '../../../components'
import './ZColorPicker.scss'

type ClickType = 'history' | 'theme' | 'initial'

export default mixins(ZColorSelectorMixin).extend({
  name: 'z-color-selector',
  props: {
    height: {
      type: [Number, String],
      default: 20,
    },
    width: {
      type: [Number, String],
      default: 20,
    },
    value: {
      type: String,
      default: '',
    },
  },

  data () {
    const info = this.getColorByName(this.value)
    return {
      colorData: {},
      colorName: info.name,
      colorHex: info.color,
      initialName: '',
      initialColor: '',
      historyColors: this.getHistoryColors(),
      themeOptions: this.getThemeColorOptions(),
      lastInfo: {},
    }
  },

  computed: {},

  watch: {
    value: {
      immediate: true,
      handler (value) {
        const lastInfo: ColorInfo = this.lastInfo as ColorInfo
        if (lastInfo && (value === lastInfo.name || value === lastInfo.color)) {
          return
        }
        const info = this.getColorByName(value)
        this.colorName = info.name || ''
        this.colorHex = info.color
        this.lastInfo = info

        if (!this.initialColor) {
          this.initialName = info.name
          this.initialColor = info.color
        }
      },
    },
  },
  mounted () {
    this.$emit('ready', {
      name: this.colorName,
      color: this.colorHex,
    })
  },
  methods: {
    onUpdateColor (value: any) {
      this.colorData = value
      this.colorHex = value.hex
      this.colorName = value.hex
    },
    onUpdateAfter () {
      this.emitColorChange()
    },
    /** 点击圆盘记录历史颜色 */
    onActionDot () {
      this.addHistoryColor(this.colorHex)
    },
    /** 提交颜色 */
    emitColorChange () {
      const { colorName, colorHex } = this
      if (colorHex) {
        this.$emit('change', {
          name: colorName || colorHex,
          color: colorHex,
          data: this.colorData,
        })
      }
    },
    /** 点击颜色 */
    onClickColor (type: ClickType, colorName: string, colorValue?: string) {
      switch (type) {
        case 'history': // 点击历史颜色时
          this.colorName = colorValue || ''
          this.colorHex = colorValue || ''
          this.emitColorChange()
          break
        case 'theme': // 点击主题颜色时
          if (!colorValue) {
            colorValue = this.getVuetifyThemeColor(colorName)
          }
          this.colorName = colorName
          this.colorHex = colorValue || ''
          this.$emit('change', {
            name: colorName,
            color: colorValue,
            isTheme: true,
          })
          break
        case 'initial': // 点击初始颜色
          this.colorName = colorName
          this.colorHex = colorValue || ''
          this.emitColorChange()
          break
      }
    },
    genColorPicker (): VNode {
      const data: VNodeData = {
        props: {
          value: this.colorHex,
        },
        on: {
          'update:color': this.onUpdateColor,
          'update:after': this.onUpdateAfter,
          'action:dot': this.onActionDot,
        },
      }
      return this.$createElement(ZColorPicker, data, ['genThemeColorContent'])
    },
    genColorCard (colorName: string, title: string, type: ClickType, colorValue?: string): VNode {
      const style: any = {}
      if (type !== 'theme') {
        style.backgroundColor = colorName
      }
      const data: VNodeData = {
        staticClass: `color--item mr-1 ${type === 'theme' ? colorName : ''}`,
        props: {
          flat: true,
          outlined: true,
          title,
        },
        style,
        on: {
          click: () => {
            switch (type) {
              case 'history' :
                this.onClickColor(type, colorName, colorName)
                break
              case 'theme':
                this.onClickColor(type, colorName, colorValue)
                break
              case 'initial' :
                break
            }
          },
        },
      }
      return this.$createElement(ZCard, data)
    },
    genThemeColorContent (): VNode {
      const data: VNodeData = {
        staticClass: 'theme-colors pb-2 px-3',
      }
      return this.$createElement('div', data, [
        this.genColorCard('#FFFFFF', '白色', 'history'),
        this.genColorCard('#000000', '黑色', 'history'),
        this.themeOptions.map(i => this.genColorCard(i.name, i.label, 'theme', i.color)),
      ])
    },
    genHistoryColorContent (): VNode {
      const data: VNodeData = {
        staticClass: 'history-colors pb-4 px-3',
      }
      const title = this.initialName || this.initialColor
      return this.$createElement('div', data, [
        this.genColorCard(this.initialColor, title, 'history'),
        this.historyColors.map(i => {
          return this.genColorCard(i, i, 'history')
        }),
      ])
    },
  },

  render (h): VNode {
    return h(ZCard, {
      staticClass: 'z-color-selector-card',
      class: {},
      props: {},
    }, [
      this.genColorPicker(),
      this.genThemeColorContent(),
      this.genHistoryColorContent(),
    ])
  },
})
